#!/usr/bin/env python3
"""Получить session string для Telegram аккаунта"""

import asyncio
from telethon import TelegramClient
from telethon.sessions import StringSession

# genziii credentials
API_ID = 29896203
API_HASH = "69098f206e8adf9534d582ff96cb56e1"

async def main():
    client = TelegramClient(
        StringSession(),
        API_ID,
        API_HASH,
        device_model='Samsung Galaxy S21',
        system_version='Android 13',
        app_version='10.6.1',
        lang_code='ru',
        system_lang_code='ru-RU'
    )
    await client.connect()

    phone = input("Номер телефона: ")
    result = await client.send_code_request(phone)
    print("Код отправлен!")

    code = input("Введи код: ")

    try:
        await client.sign_in(phone, code, phone_code_hash=result.phone_code_hash)
    except Exception as e:
        if "SessionPasswordNeededError" in str(type(e)):
            password = input("Введи 2FA пароль: ")
            await client.sign_in(password=password)
        else:
            raise

    print()
    print("Session string:")
    print(client.session.save())

    me = await client.get_me()
    print(f"\nАккаунт: @{me.username}")

    await client.disconnect()

asyncio.run(main())
