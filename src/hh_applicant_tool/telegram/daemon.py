#!/usr/bin/env python3
"""
AutoKus Daemon v4.0 — Production-ready Telethon bot

Ключевые отличия от предыдущих версий:
- catch_up=True — получать пропущенные сообщения
- auto_reconnect=True — автоматическое переподключение
- Event handler с декоратором — не polling
- async with client — правильный context manager
- asyncio.create_task() — non-blocking обработка
"""

import asyncio
import json
import logging
import os
import signal
import sys
from datetime import datetime
from pathlib import Path

from telethon import TelegramClient, events
from telethon.errors import FloodWaitError
from telethon.sessions import StringSession

import db
from llm import get_response_with_retry

# === CONFIG ===
WORKDIR = Path(__file__).parent.resolve()
PID_FILE = WORKDIR / "daemon.pid"


def load_dotenv(path: Path):
    if not path.exists():
        return
    with open(path) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' in line:
                key, _, value = line.partition('=')
                os.environ.setdefault(key.strip(), value.strip())


load_dotenv(WORKDIR / ".env")

API_ID = int(os.getenv("TELEGRAM_API_ID", 0))
API_HASH = os.getenv("TELEGRAM_API_HASH", "")
SESSION_STRING = os.getenv("TELEGRAM_SESSION_STRING", "")
ALERT_CHAT_ID = int(os.getenv("ALERT_CHAT_ID", 0))

RATE_LIMIT_SECONDS = 30
MAX_HISTORY_MESSAGES = 50

# === LOGGING ===
LOG_FILE = WORKDIR / "daemon.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout)
    ]
)
log = logging.getLogger("autokus")

# === GLOBAL STATE ===
last_reply_time: dict[str, datetime] = {}

# === CLIENT — создаётся ГЛОБАЛЬНО с правильными настройками ===
client = TelegramClient(
    StringSession(SESSION_STRING),
    API_ID,
    API_HASH,
    catch_up=True,              # КРИТИЧНО — получать пропущенные сообщения
    connection_retries=5,
    retry_delay=1,
    auto_reconnect=True,        # Автоматическое переподключение
    flood_sleep_threshold=60,   # Автоматическая обработка FloodWait до 60 сек
)


# === PID ===
def check_and_create_pid():
    if PID_FILE.exists():
        old_pid = int(PID_FILE.read_text().strip())
        try:
            os.kill(old_pid, 0)
            log.error(f"Daemon already running with PID {old_pid}")
            sys.exit(1)
        except OSError:
            log.warning("Removing stale PID file")
    PID_FILE.write_text(str(os.getpid()))
    log.info(f"PID file created: {os.getpid()}")


def remove_pid():
    if PID_FILE.exists():
        PID_FILE.unlink()


# === HELPERS ===
def can_reply(username: str) -> bool:
    username = username.lower()
    if username not in last_reply_time:
        return True
    return (datetime.now() - last_reply_time[username]).total_seconds() >= RATE_LIMIT_SECONDS


def mark_replied(username: str):
    last_reply_time[username.lower()] = datetime.now()


async def get_chat_history(entity, limit: int = MAX_HISTORY_MESSAGES) -> list[dict]:
    """Get chat history as list of {role, text}"""
    messages = []
    async for msg in client.iter_messages(entity, limit=limit):
        if msg.text:
            messages.append({"role": "me" if msg.out else "hr", "text": msg.text})
    return list(reversed(messages))  # chronological order


async def send_alert(message: str):
    """Send alert to @genziii"""
    try:
        await client.send_message(ALERT_CHAT_ID, f"🤖 AutoKus\n\n{message}")
        log.info(f"[ALERT] {message[:100]}")
    except Exception as e:
        log.error(f"Alert failed: {e}")


async def send_escalation(username: str, reason: str, hr_message: str, bot_response: str, facts: dict):
    """Send escalation alert with full context"""
    facts_str = json.dumps(facts, ensure_ascii=False, indent=2) if facts else "{}"

    alert = f"""🚨 ESCALATION: @{username}

Причина: {reason}

HR написал:
"{hr_message[:500]}"

Бот ответил:
"{bot_response[:500]}"

Сохранённые факты:
{facts_str}"""

    await send_alert(alert)


# === MESSAGE PROCESSING ===
async def process_message(event, sender):
    """Process incoming message and respond"""
    username = sender.username.lower()
    message_text = event.text
    entity = event.chat_id

    # Get or create conversation
    conv = db.get_conversation(username)
    if not conv:
        # New contact — add to pending
        name = f"{sender.first_name or ''} {sender.last_name or ''}".strip() or None
        db.upsert_conversation(
            username=username,
            user_id=sender.id,
            name=name,
            status='pending',
            source='incoming_message',
            note='Написал первым'
        )
        await send_alert(
            f"📩 Новый HR: @{username}\n"
            f"Имя: {name or 'не указано'}\n"
            f"Сообщение: {message_text[:200]}...\n\n"
            f"Добавлен в pending. Используй /hr-approve {username}"
        )
        log.info(f"[NEW] @{username} added to pending")
        return

    # Check if approved
    if conv['status'] != 'approved':
        log.debug(f"@{username} is {conv['status']}, skipping")
        return

    # Rate limit
    if not can_reply(username):
        log.debug(f"@{username}: rate limited")
        return

    log.info(f"[MSG] @{username}: {message_text[:80]}...")

    # Update message count
    db.mark_message_received(username)

    # Get history
    history = await get_chat_history(entity)

    # Remove the last message (it's the new one we're processing)
    if history and history[-1]['role'] == 'hr' and history[-1]['text'] == message_text:
        history = history[:-1]

    # Get LLM response
    result = await get_response_with_retry(
        history=history,
        new_message=message_text,
        facts=conv.get('facts', {})
    )

    if not result:
        log.error(f"Failed to get LLM response for @{username}")
        await send_alert(f"❌ Не смог ответить @{username}:\n\n{message_text[:300]}")
        return

    # Log to database
    db.log_message(
        username=username,
        direction='incoming',
        message=message_text,
        llm_response={
            'response': result.response,
            'facts_update': result.facts_update,
            'action': result.action,
            'escalate_reason': result.escalate_reason
        },
        latency_ms=result.latency_ms
    )

    # Update facts if any
    if result.facts_update:
        db.update_facts(username, result.facts_update)
        log.info(f"[FACTS] @{username}: {result.facts_update}")

    # Handle action
    if result.action == 'wait':
        log.info(f"[WAIT] @{username}: LLM decided to wait")
        return

    if result.action == 'escalate':
        await send_escalation(
            username=username,
            reason=result.escalate_reason or "Unknown",
            hr_message=message_text,
            bot_response=result.response,
            facts=conv.get('facts', {})
        )

    # Send response (for both 'respond' and 'escalate')
    if result.action in ('respond', 'escalate'):
        await client.send_message(entity, result.response)
        mark_replied(username)
        db.mark_replied(username)

        # Log outgoing
        db.log_message(
            username=username,
            direction='outgoing',
            message=result.response
        )

        log.info(f"[SENT] @{username}: {result.response[:100]}...")


async def process_message_safe(event, sender):
    """Wrapper with error handling"""
    try:
        await process_message(event, sender)
    except FloodWaitError as e:
        log.warning(f"FloodWait: {e.seconds}s — sleeping")
        await asyncio.sleep(e.seconds)
    except Exception as e:
        log.exception(f"Error processing message: {e}")


# === EVENT HANDLER — декоратор на глобальном client ===
@client.on(events.NewMessage(incoming=True))
async def handler(event):
    """Handle incoming private messages"""
    log.info(f"[EVENT] Raw event received: {event.text[:50] if event.text else 'no text'}...")

    # Only private messages
    if not event.is_private:
        log.debug(f"[EVENT] Skipping non-private message")
        return

    # Get sender
    sender = await event.get_sender()
    if not sender or not hasattr(sender, 'username') or not sender.username:
        log.debug(f"[EVENT] Skipping message without username")
        return

    log.info(f"[EVENT] Processing message from @{sender.username}")
    # Process directly
    await process_message_safe(event, sender)


# === SHUTDOWN ===
async def shutdown(sig):
    """Graceful shutdown handler"""
    log.info(f"Received {sig.name}, shutting down...")
    try:
        await send_alert("Daemon остановлен 🛑")
    except Exception:
        pass
    await client.disconnect()


# === MAIN ===
async def main():
    log.info("AutoKus Daemon v4.0 starting...")

    # Check for existing instance
    check_and_create_pid()

    # Initialize database
    db.init_db()

    # Setup signal handlers for graceful shutdown
    loop = asyncio.get_event_loop()
    for sig in (signal.SIGTERM, signal.SIGINT):
        loop.add_signal_handler(sig, lambda s=sig: asyncio.create_task(shutdown(s)))

    try:
        async with client:
            me = await client.get_me()
            log.info(f"Logged in as: @{me.username} ({me.first_name})")

            stats = db.get_stats()
            log.info(f"Database: {stats['approved']} approved, {stats['pending']} pending")

            await send_alert("Daemon v4.0 запущен ✅")
            log.info("Listening for messages...")

            # This blocks until disconnect
            await client.run_until_disconnected()

    except Exception as e:
        log.exception(f"Critical error: {e}")
        try:
            await send_alert(f"💥 Daemon crashed: {e}")
        except Exception:
            pass
    finally:
        remove_pid()
        log.info("Bye!")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        log.info("Interrupted by user")
    finally:
        remove_pid()
