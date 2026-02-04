#!/usr/bin/env python3
"""Интерактивное получение session string"""

import asyncio
from telethon import TelegramClient
from telethon.sessions import StringSession

# genziii credentials  
API_ID = 29896203
API_HASH = "69098f206e8adf9534d582ff96cb56e1"

async def main():
    print("=== Telethon Session Generator ===")
    print()
    
    # Используем client.start() который делает всё автоматически
    client = TelegramClient(StringSession(), API_ID, API_HASH)
    
    # start() сам запросит телефон и код
    await client.start()
    
    print()
    print("✅ Успешно залогинились!")
    print()
    print("Session string (сохрани это):")
    print("=" * 50)
    print(client.session.save())
    print("=" * 50)
    
    me = await client.get_me()
    print(f"\nАккаунт: @{me.username} ({me.first_name})")
    
    await client.disconnect()

asyncio.run(main())
