#!/usr/bin/env python3
"""
Парсер авторов сообщений из чата
Обходит ограничение API на получение участников
"""

import asyncio
import csv
import sys
from telethon import TelegramClient
from telethon.sessions import StringSession

# Креды из daemon.py
API_ID = 28115037
API_HASH = "bd80e2c90a3daefddc03e41fd02090e8"
SESSION_STRING = "1ApWapzMBu7qNtxaDmuja-JBiA2-cqh2ncJsrqPeEOwDNQi3rBZU69__ck2vUUBluCql3pE0tCt7TbdS8HRDVvPEqpoqzO__sf1QiCd3qylLs3x0RsNcNN4hMpk35nN6CbVSgnmfJBM7hFvPkAZlwhrRcovRvmvS5jq5TRUDPaQzWL65prXAe5FJUPyNvayE1BF-IGEr6z4yeJ_zrfTI-G1Ea9MuZmEq-rZGWSCleYpF5BCRcDusbnPark0g9yqAxA5_sbw5c0TecXZrwvzLGb8PWtyyWYhx6At6zYlqeH2qVltSXDGz8bQkfvvtwrCXYRsQvAk7gTOTQc3X3TYTrWRI9iFFcUjs="


async def parse_messages(chat_link: str, output_file: str, limit: int = 10000):
    """Парсит авторов сообщений из чата"""

    client = TelegramClient(
        StringSession(SESSION_STRING),
        API_ID,
        API_HASH
    )

    await client.connect()

    if not await client.is_user_authorized():
        print("Ошибка: сессия не авторизована")
        return

    # Получаем чат
    try:
        entity = await client.get_entity(chat_link)
        print(f"Чат: {entity.title}")
    except Exception as e:
        print(f"Ошибка получения чата: {e}")
        return

    # Собираем уникальных авторов
    authors = {}
    msg_count = 0

    print(f"Парсим последние {limit} сообщений...")

    async for message in client.iter_messages(entity, limit=limit):
        msg_count += 1
        if msg_count % 1000 == 0:
            print(f"  Сообщений: {msg_count}, авторов: {len(authors)}")

        # Пропускаем системные сообщения
        if not message.sender:
            continue

        sender = message.sender
        user_id = sender.id

        if user_id not in authors:
            authors[user_id] = {
                'id': user_id,
                'username': getattr(sender, 'username', '') or '',
                'first_name': getattr(sender, 'first_name', '') or '',
                'last_name': getattr(sender, 'last_name', '') or '',
                'msg_count': 1,
            }
        else:
            authors[user_id]['msg_count'] += 1

    print(f"\nВсего сообщений: {msg_count}")
    print(f"Уникальных авторов: {len(authors)}")

    # Сохраняем в CSV (сортируем по количеству сообщений)
    sorted_authors = sorted(authors.values(), key=lambda x: x['msg_count'], reverse=True)

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'username', 'first_name', 'last_name', 'msg_count'])
        writer.writeheader()
        for a in sorted_authors:
            writer.writerow(a)

    print(f"Сохранено в {output_file}")
    await client.disconnect()


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Использование: python parse_messages.py <chat_link> <output.csv> [limit]")
        print("Пример: python parse_messages.py https://t.me/itrecruitergroup authors.csv 20000")
        sys.exit(1)

    chat_link = sys.argv[1]
    output_file = sys.argv[2]
    limit = int(sys.argv[3]) if len(sys.argv) > 3 else 10000

    asyncio.run(parse_messages(chat_link, output_file, limit))
