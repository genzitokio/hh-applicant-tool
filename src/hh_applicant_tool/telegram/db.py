"""
AutoKus Database — SQLite storage
"""

import json
import sqlite3
from contextlib import contextmanager
from datetime import datetime
from pathlib import Path
from typing import Optional

DB_PATH = Path(__file__).parent / "autokus.db"


def init_db():
    """Initialize database schema"""
    with get_connection() as conn:
        conn.executescript("""
            CREATE TABLE IF NOT EXISTS conversations (
                username TEXT PRIMARY KEY,
                user_id INTEGER,
                name TEXT,
                status TEXT DEFAULT 'pending',

                facts TEXT DEFAULT '{}',

                source TEXT,
                found_at TEXT,
                note TEXT,

                last_message_at TEXT,
                last_reply_at TEXT,
                message_count INTEGER DEFAULT 0,

                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS message_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                direction TEXT NOT NULL,
                message TEXT,
                llm_response TEXT,
                latency_ms INTEGER,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,

                FOREIGN KEY (username) REFERENCES conversations(username)
            );

            CREATE INDEX IF NOT EXISTS idx_message_log_username
                ON message_log(username);
            CREATE INDEX IF NOT EXISTS idx_message_log_created
                ON message_log(created_at);
            CREATE INDEX IF NOT EXISTS idx_conversations_status
                ON conversations(status);
        """)


@contextmanager
def get_connection():
    """Get database connection with auto-commit"""
    conn = sqlite3.connect(DB_PATH, timeout=10)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


# === CONVERSATIONS ===

def get_conversation(username: str) -> Optional[dict]:
    """Get conversation by username"""
    with get_connection() as conn:
        row = conn.execute(
            "SELECT * FROM conversations WHERE username = ?",
            (username.lower(),)
        ).fetchone()

        if row:
            data = dict(row)
            data['facts'] = json.loads(data['facts'] or '{}')
            return data
        return None


def get_approved_usernames() -> set[str]:
    """Get all approved usernames"""
    with get_connection() as conn:
        rows = conn.execute(
            "SELECT username FROM conversations WHERE status = 'approved'"
        ).fetchall()
        return {row['username'] for row in rows}


def get_conversations_by_status(status: str) -> list[dict]:
    """Get all conversations with given status"""
    with get_connection() as conn:
        rows = conn.execute(
            "SELECT * FROM conversations WHERE status = ? ORDER BY updated_at DESC",
            (status,)
        ).fetchall()

        result = []
        for row in rows:
            data = dict(row)
            data['facts'] = json.loads(data['facts'] or '{}')
            result.append(data)
        return result


def upsert_conversation(
    username: str,
    user_id: Optional[int] = None,
    name: Optional[str] = None,
    status: str = 'pending',
    source: Optional[str] = None,
    note: Optional[str] = None
) -> dict:
    """Create or update conversation"""
    username = username.lower()
    now = datetime.now().isoformat()

    with get_connection() as conn:
        existing = conn.execute(
            "SELECT * FROM conversations WHERE username = ?",
            (username,)
        ).fetchone()

        if existing:
            # Update
            conn.execute("""
                UPDATE conversations SET
                    user_id = COALESCE(?, user_id),
                    name = COALESCE(?, name),
                    status = ?,
                    source = COALESCE(?, source),
                    note = COALESCE(?, note),
                    updated_at = ?
                WHERE username = ?
            """, (user_id, name, status, source, note, now, username))
        else:
            # Insert
            conn.execute("""
                INSERT INTO conversations
                (username, user_id, name, status, source, found_at, note, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (username, user_id, name, status, source, now[:10], note, now, now))

    return get_conversation(username)


def update_facts(username: str, facts_update: dict) -> dict:
    """Update facts for conversation (merge with existing)"""
    username = username.lower()
    now = datetime.now().isoformat()

    with get_connection() as conn:
        row = conn.execute(
            "SELECT facts FROM conversations WHERE username = ?",
            (username,)
        ).fetchone()

        if not row:
            return None

        current_facts = json.loads(row['facts'] or '{}')
        current_facts.update(facts_update)

        conn.execute("""
            UPDATE conversations SET
                facts = ?,
                updated_at = ?
            WHERE username = ?
        """, (json.dumps(current_facts, ensure_ascii=False), now, username))

    return get_conversation(username)


def update_status(username: str, status: str) -> bool:
    """Update conversation status"""
    username = username.lower()
    now = datetime.now().isoformat()

    with get_connection() as conn:
        cursor = conn.execute("""
            UPDATE conversations SET
                status = ?,
                updated_at = ?
            WHERE username = ?
        """, (status, now, username))
        return cursor.rowcount > 0


def mark_message_received(username: str):
    """Update last_message_at and increment message_count"""
    username = username.lower()
    now = datetime.now().isoformat()

    with get_connection() as conn:
        conn.execute("""
            UPDATE conversations SET
                last_message_at = ?,
                message_count = message_count + 1,
                updated_at = ?
            WHERE username = ?
        """, (now, now, username))


def mark_replied(username: str):
    """Update last_reply_at"""
    username = username.lower()
    now = datetime.now().isoformat()

    with get_connection() as conn:
        conn.execute("""
            UPDATE conversations SET
                last_reply_at = ?,
                updated_at = ?
            WHERE username = ?
        """, (now, now, username))


# === MESSAGE LOG ===

def log_message(
    username: str,
    direction: str,  # 'incoming' or 'outgoing'
    message: str,
    llm_response: Optional[dict] = None,
    latency_ms: Optional[int] = None
):
    """Log a message to message_log"""
    with get_connection() as conn:
        conn.execute("""
            INSERT INTO message_log
            (username, direction, message, llm_response, latency_ms)
            VALUES (?, ?, ?, ?, ?)
        """, (
            username.lower(),
            direction,
            message,
            json.dumps(llm_response, ensure_ascii=False) if llm_response else None,
            latency_ms
        ))


def get_recent_logs(limit: int = 20) -> list[dict]:
    """Get recent message logs"""
    with get_connection() as conn:
        rows = conn.execute("""
            SELECT * FROM message_log
            ORDER BY id DESC
            LIMIT ?
        """, (limit,)).fetchall()

        result = []
        for row in rows:
            data = dict(row)
            if data['llm_response']:
                data['llm_response'] = json.loads(data['llm_response'])
            result.append(data)
        return result


def get_conversation_logs(username: str, limit: int = 50) -> list[dict]:
    """Get logs for specific conversation"""
    with get_connection() as conn:
        rows = conn.execute("""
            SELECT * FROM message_log
            WHERE username = ?
            ORDER BY id DESC
            LIMIT ?
        """, (username.lower(), limit)).fetchall()

        result = []
        for row in rows:
            data = dict(row)
            if data['llm_response']:
                data['llm_response'] = json.loads(data['llm_response'])
            result.append(data)
        return list(reversed(result))  # chronological order


# === STATS ===

def get_stats() -> dict:
    """Get database statistics"""
    with get_connection() as conn:
        total = conn.execute("SELECT COUNT(*) FROM conversations").fetchone()[0]
        approved = conn.execute("SELECT COUNT(*) FROM conversations WHERE status = 'approved'").fetchone()[0]
        pending = conn.execute("SELECT COUNT(*) FROM conversations WHERE status = 'pending'").fetchone()[0]
        rejected = conn.execute("SELECT COUNT(*) FROM conversations WHERE status = 'rejected'").fetchone()[0]

        messages = conn.execute("SELECT COUNT(*) FROM message_log").fetchone()[0]
        escalations = conn.execute(
            "SELECT COUNT(*) FROM message_log WHERE llm_response LIKE '%escalate%'"
        ).fetchone()[0]

        avg_latency = conn.execute(
            "SELECT AVG(latency_ms) FROM message_log WHERE latency_ms IS NOT NULL"
        ).fetchone()[0]

        return {
            'total_conversations': total,
            'approved': approved,
            'pending': pending,
            'rejected': rejected,
            'total_messages': messages,
            'escalations': escalations,
            'avg_latency_ms': round(avg_latency) if avg_latency else None
        }


# === MIGRATION ===

def migrate_from_json(json_path: str = "hr_database.json"):
    """Migrate data from hr_database.json to SQLite"""
    json_file = Path(__file__).parent / json_path

    if not json_file.exists():
        print(f"File not found: {json_file}")
        return 0

    with open(json_file, encoding='utf-8') as f:
        data = json.load(f)

    count = 0
    for username, info in data.get('contacts', {}).items():
        upsert_conversation(
            username=username,
            user_id=info.get('user_id'),
            name=info.get('name'),
            status=info.get('status', 'pending'),
            source=info.get('source'),
            note=info.get('note')
        )
        count += 1

    print(f"Migrated {count} conversations")
    return count


# Initialize on import
init_db()


if __name__ == "__main__":
    # Run migration if executed directly
    migrate_from_json()

    # Show stats
    stats = get_stats()
    print(f"\nDatabase stats:")
    for key, value in stats.items():
        print(f"  {key}: {value}")
