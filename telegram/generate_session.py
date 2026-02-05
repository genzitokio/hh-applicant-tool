#!/usr/bin/env python3
"""Генерация новой Telegram session string для daemon"""

from telethon.sync import TelegramClient
from telethon.sessions import StringSession

API_ID = 28115037
API_HASH = "bd80e2c90a3daefddc03e41fd02090e8"

client = TelegramClient(StringSession(), API_ID, API_HASH)
client.start()

session_string = client.session.save()

# Сохраняем в файл
with open("daemon_session.txt", "w") as f:
    f.write(session_string)

print()
print("✅ Session string сохранена в daemon_session.txt")
print()
