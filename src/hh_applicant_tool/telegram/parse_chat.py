#!/usr/bin/env python3
"""
Парсер участников чата — использует сессию из daemon.py
Выход: CSV с id, username, first_name, last_name
"""

import asyncio
import csv
import sys
from telethon import TelegramClient
from telethon.sessions import StringSession
from telethon.tl.types import ChannelParticipantsSearch
import string

# Креды из daemon.py
API_ID = 28115037
API_HASH = "bd80e2c90a3daefddc03e41fd02090e8"
SESSION_STRING = "1ApWapzMBu7qNtxaDmuja-JBiA2-cqh2ncJsrqPeEOwDNQi3rBZU69__ck2vUUBluCql3pE0tCt7TbdS8HRDVvPEqpoqzO__sf1QiCd3qylLs3x0RsNcNN4hMpk35nN6CbVSgnmfJBM7hFvPkAZlwhrRcovRvmvS5jq5TRUDPaQzWL65prXAe5FJUPyNvayE1BF-IGEr6z4yeJ_zrfTI-G1Ea9MuZmEq-rZGWSCleYpF5BCRcDusbnPark0g9yqAxA5_sbw5c0TecXZrwvzLGb8PWtyyWYhx6At6zYlqeH2qVltSXDGz8bQkfvvtwrCXYRsQvAk7gTOTQc3X3TYTrWRI9iFFcUjs="


async def parse_chat(chat_link: str, output_file: str):
    """Парсит участников чата и сохраняет в CSV"""

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

    # Собираем участников
    members = {}

    # Базовый парсинг
    print("Стандартный парсинг...")
    try:
        async for user in client.iter_participants(entity, limit=10000):
            members[user.id] = {
                'id': user.id,
                'username': user.username or '',
                'first_name': user.first_name or '',
                'last_name': user.last_name or '',
            }
            if len(members) % 500 == 0:
                print(f"  Собрано: {len(members)}")
    except Exception as e:
        print(f"Стандартный парсинг прерван: {e}")

    # Расширенный поиск по алфавиту (для больших чатов)
    if len(members) > 5000:
        print("Расширенный поиск по алфавиту...")
        for letter in string.ascii_lowercase:
            try:
                async for user in client.iter_participants(
                    entity,
                    filter=ChannelParticipantsSearch(letter),
                    limit=5000
                ):
                    if user.id not in members:
                        members[user.id] = {
                            'id': user.id,
                            'username': user.username or '',
                            'first_name': user.first_name or '',
                            'last_name': user.last_name or '',
                        }
                await asyncio.sleep(0.5)  # FloodWait prevention
            except Exception as e:
                print(f"  Ошибка на букве {letter}: {e}")

    print(f"\nВсего участников: {len(members)}")

    # Сохраняем в CSV
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'username', 'first_name', 'last_name'])
        writer.writeheader()
        for m in members.values():
            writer.writerow(m)

    print(f"Сохранено в {output_file}")
    await client.disconnect()


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Использование: python parse_chat.py <chat_link> <output.csv>")
        print("Пример: python parse_chat.py https://t.me/itrecruitergroup itrecruitergroup.csv")
        sys.exit(1)

    chat_link = sys.argv[1]
    output_file = sys.argv[2]

    asyncio.run(parse_chat(chat_link, output_file))
