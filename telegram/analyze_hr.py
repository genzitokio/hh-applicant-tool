#!/usr/bin/env python3
"""
Анализ и фильтрация HR из спарсенных данных
- Перекрёстный анализ (в 2+ чатах = вероятнее HR)
- Фильтрация по keywords
- Вывод кандидатов
"""

import csv
import re
from pathlib import Path
from collections import Counter

# HR keywords
HR_KEYWORDS = [
    'recruiter', 'рекрутер', 'hr', 'эйчар', 'headhunter',
    'talent', 'sourcer', 'сорсер', 'hiring', 'найм',
    'recruitment', 'рекрутинг', 'кадры', 'ресёрчер', 'researcher'
]

# Negative keywords (исключаем)
NEGATIVE_KEYWORDS = [
    'ищу работу', 'в поиске', 'looking for', 'job seeker',
    'ищу проект', 'open to work', 'frontend', 'backend',
    'developer', 'разработчик', 'программист'
]


def load_csv(path: Path) -> dict:
    """Загрузить CSV и вернуть dict {user_id: data}"""
    users = {}
    with open(path, encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            uid = int(row['id'])
            users[uid] = {
                'id': uid,
                'username': row['username'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'msg_count': int(row.get('msg_count', 0)),
            }
    return users


def is_hr_by_keywords(user: dict) -> bool:
    """Проверить, похож ли на HR по keywords"""
    text = f"{user['username']} {user['first_name']} {user['last_name']}".lower()

    # Проверяем negative keywords
    for neg in NEGATIVE_KEYWORDS:
        if neg in text:
            return False

    # Проверяем HR keywords
    for kw in HR_KEYWORDS:
        if kw in text:
            return True

    return False


def main():
    osint_dir = Path('/home/flyingkuskus/AutoKus/osint/members')

    # Загружаем все файлы
    files = {
        'itrecruitergroup': osint_dir / 'itrecruitergroup_authors.csv',
        'ITHRchat': osint_dir / 'ITHRchat_authors.csv',
        'ITrecruiters_community': osint_dir / 'ITrecruiters_community_authors.csv',
    }

    all_users = {}  # {user_id: {data + sources}}

    for source, path in files.items():
        if not path.exists():
            print(f"Файл не найден: {path}")
            continue

        users = load_csv(path)
        print(f"{source}: {len(users)} авторов")

        for uid, data in users.items():
            if uid not in all_users:
                all_users[uid] = {**data, 'sources': [source], 'total_msgs': data['msg_count']}
            else:
                all_users[uid]['sources'].append(source)
                all_users[uid]['total_msgs'] += data['msg_count']

    print(f"\nВсего уникальных: {len(all_users)}")

    # Перекрёстный анализ
    multi_chat = {uid: u for uid, u in all_users.items() if len(u['sources']) >= 2}
    print(f"В 2+ чатах: {len(multi_chat)}")

    # По keywords
    hr_by_keywords = {uid: u for uid, u in all_users.items() if is_hr_by_keywords(u)}
    print(f"По HR-keywords: {len(hr_by_keywords)}")

    # Объединяем
    candidates = {}

    # Приоритет 1: в 2+ чатах + HR keywords
    for uid in set(multi_chat.keys()) & set(hr_by_keywords.keys()):
        candidates[uid] = {**all_users[uid], 'score': 'high', 'reason': '2+ chats + keywords'}

    # Приоритет 2: в 2+ чатах
    for uid in multi_chat:
        if uid not in candidates:
            candidates[uid] = {**all_users[uid], 'score': 'medium', 'reason': '2+ chats'}

    # Приоритет 3: HR keywords + много сообщений
    for uid in hr_by_keywords:
        if uid not in candidates and all_users[uid]['total_msgs'] >= 10:
            candidates[uid] = {**all_users[uid], 'score': 'medium', 'reason': 'keywords + active'}

    print(f"\n=== КАНДИДАТЫ: {len(candidates)} ===\n")

    # Сортируем: high → medium, потом по сообщениям
    sorted_candidates = sorted(
        candidates.values(),
        key=lambda x: (0 if x['score'] == 'high' else 1, -x['total_msgs'])
    )

    # Выводим
    print("SCORE | USERNAME | NAME | MSGS | SOURCES | REASON")
    print("-" * 80)

    for c in sorted_candidates[:100]:  # топ 100
        username = c['username'] or '-'
        name = f"{c['first_name']} {c['last_name']}".strip() or '-'
        sources = ', '.join(c['sources'])
        print(f"{c['score']:6} | @{username:20} | {name:25} | {c['total_msgs']:4} | {sources:40} | {c['reason']}")

    # Сохраняем в CSV
    output_path = osint_dir / 'hr_candidates.csv'
    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'id', 'username', 'first_name', 'last_name', 'total_msgs', 'sources', 'score', 'reason'
        ])
        writer.writeheader()
        for c in sorted_candidates:
            writer.writerow({
                'id': c['id'],
                'username': c['username'],
                'first_name': c['first_name'],
                'last_name': c['last_name'],
                'total_msgs': c['total_msgs'],
                'sources': '|'.join(c['sources']),
                'score': c['score'],
                'reason': c['reason'],
            })

    print(f"\n\nСохранено в {output_path}")


if __name__ == '__main__':
    main()
