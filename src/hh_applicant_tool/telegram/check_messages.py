#!/usr/bin/env python3
"""
AutoKus v5.0 — One-shot message checker

Запускается по cron каждые 30 секунд.
Подключается к Telegram, проверяет сообщения, отвечает, отключается.
"""

import asyncio
import json
import logging
import os
import sys
from datetime import datetime
from pathlib import Path

from telethon import TelegramClient
from telethon.sessions import StringSession

import db
from llm import get_response_with_retry

# === CONFIG ===
WORKDIR = Path(__file__).parent.resolve()
LOCK_FILE = WORKDIR / "check.lock"
LAST_CHECK_FILE = WORKDIR / "last_check.json"

RATE_LIMIT_SECONDS = 30
MAX_HISTORY_MESSAGES = 20

# === LOGGING ===
LOG_FILE = WORKDIR / "autokus.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout)
    ]
)
log = logging.getLogger("autokus")


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


# === LOCK ===
def acquire_lock() -> bool:
    if LOCK_FILE.exists():
        mtime = LOCK_FILE.stat().st_mtime
        if (datetime.now().timestamp() - mtime) > 300:
            log.warning("Removing stale lock file")
            LOCK_FILE.unlink()
        else:
            return False
    LOCK_FILE.write_text(str(os.getpid()))
    return True


def release_lock():
    if LOCK_FILE.exists():
        LOCK_FILE.unlink()


# === STATE ===
def load_last_check() -> dict:
    if LAST_CHECK_FILE.exists():
        try:
            return json.loads(LAST_CHECK_FILE.read_text())
        except:
            return {}
    return {}


def save_last_check(data: dict):
    LAST_CHECK_FILE.write_text(json.dumps(data, indent=2))


# === RATE LIMIT ===
last_reply_time: dict[str, float] = {}


def load_rate_limits():
    global last_reply_time
    rate_file = WORKDIR / "rate_limits.json"
    if rate_file.exists():
        try:
            last_reply_time = json.loads(rate_file.read_text())
        except:
            pass


def save_rate_limits():
    rate_file = WORKDIR / "rate_limits.json"
    rate_file.write_text(json.dumps(last_reply_time))


def can_reply(username: str) -> bool:
    username = username.lower()
    if username not in last_reply_time:
        return True
    return (datetime.now().timestamp() - last_reply_time[username]) >= RATE_LIMIT_SECONDS


def mark_replied(username: str):
    last_reply_time[username.lower()] = datetime.now().timestamp()
    save_rate_limits()


# === MAIN ===
async def main():
    log.info("=== AutoKus check ===")

    if not acquire_lock():
        log.warning("Another instance running")
        return

    try:
        db.init_db()
        load_rate_limits()

        last_check = load_last_check()
        approved = db.get_approved_usernames()

        if not approved:
            log.info("No approved users")
            return

        # Connect once
        client = TelegramClient(StringSession(SESSION_STRING), API_ID, API_HASH)
        await client.connect()

        if not await client.is_user_authorized():
            log.error("Not authorized!")
            return

        me = await client.get_me()
        log.info(f"Connected as @{me.username}")

        try:
            for username in approved:
                await check_user(client, username, last_check)
        finally:
            save_last_check(last_check)
            await client.disconnect()

        log.info("=== Done ===")

    except Exception as e:
        log.exception(f"Error: {e}")
    finally:
        release_lock()


async def check_user(client, username: str, last_check: dict):
    last_msg_id = last_check.get(username, 0)

    try:
        entity = await client.get_entity(username)
    except Exception as e:
        log.warning(f"Can't get entity @{username}: {e}")
        return

    # Get recent messages
    messages = []
    async for msg in client.iter_messages(entity, limit=20):
        if msg.text:
            messages.append({
                "id": msg.id,
                "out": msg.out,
                "text": msg.text
            })

    messages = list(reversed(messages))

    # Find new incoming
    new_incoming = [m for m in messages if m["id"] > last_msg_id and not m["out"]]

    if not new_incoming:
        return

    latest = new_incoming[-1]
    last_check[username] = latest["id"]

    log.info(f"[MSG] @{username}: {latest['text'][:80]}...")

    # Get conversation
    conv = db.get_conversation(username)
    if not conv:
        db.upsert_conversation(
            username=username,
            user_id=entity.id,
            name=f"{entity.first_name or ''} {entity.last_name or ''}".strip() or None,
            status='pending',
            source='incoming_message'
        )
        await client.send_message(ALERT_CHAT_ID, f"🤖 AutoKus\n\n📩 Новый: @{username}\n{latest['text'][:200]}")
        log.info(f"[NEW] @{username} -> pending")
        return

    if conv['status'] != 'approved':
        return

    if not can_reply(username):
        log.debug(f"@{username}: rate limited")
        return

    # Build history
    history = [{"role": "me" if m["out"] else "hr", "text": m["text"]} for m in messages if m["id"] < latest["id"]]

    db.mark_message_received(username)

    # LLM
    result = await get_response_with_retry(
        history=history[-MAX_HISTORY_MESSAGES:],
        new_message=latest["text"],
        facts=conv.get('facts', {})
    )

    if not result:
        log.error(f"LLM failed for @{username}")
        await client.send_message(ALERT_CHAT_ID, f"🤖 AutoKus\n\n❌ LLM failed: @{username}")
        return

    db.log_message(username=username, direction='incoming', message=latest["text"],
                   llm_response={'response': result.response, 'action': result.action},
                   latency_ms=result.latency_ms)

    if result.facts_update:
        db.update_facts(username, result.facts_update)

    if result.action == 'wait':
        log.info(f"[WAIT] @{username}")
        return

    if result.action == 'escalate':
        await client.send_message(ALERT_CHAT_ID, f"🤖 AutoKus\n\n🚨 @{username}: {result.escalate_reason}")

    if result.action in ('respond', 'escalate'):
        await client.send_message(entity, result.response)
        mark_replied(username)
        db.mark_replied(username)
        db.log_message(username=username, direction='outgoing', message=result.response)
        log.info(f"[SENT] @{username}: {result.response[:80]}...")


if __name__ == "__main__":
    asyncio.run(main())
