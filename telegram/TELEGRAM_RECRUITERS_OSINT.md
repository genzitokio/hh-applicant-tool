# TELEGRAM OSINT: Сбор контактов IT-рекрутеров

> Полный анализ методов, инструментов и источников для сбора Telegram-контактов IT-рекрутеров
>
> Дата: 2026-01-29

---

## ЦЕЛЬ

Собрать максимум Telegram-контактов IT-рекрутеров, используя OSINT-инструменты (бесплатные и open-source).

---

## 1. ИСТОЧНИКИ ДАННЫХ

### 1.1 HR/Рекрутинг чаты (прямой сбор username)

#### Tier 1 — Крупнейшие (приоритет)

| Чат | Username | Участников | Тип |
|-----|----------|-----------|-----|
| HR Вакансии и работа | @job_in_hr | 20,000+ | Чат |
| HR/Recruitment | — | 9,600+ | Чат |
| IT Recruiter | — | 8,200+ | Чат |
| HR рекрутеры работа | @hr_recr | 8,000+ | Чат |
| Чат только для HR | — | 5,900+ | Чат |
| hrdigital | — | 4,800+ | Чат |
| Recruitment for Friends | @rff_chat | 3,500+ | Чат |
| Курс СОРСЕР/РЕКРУТЕР | — | 3,600+ | Чат |
| Клуб эйчаров | — | 1,400+ | Чат |
| Рекрутер кадровик | @recruter_kadrovik | — | Чат |

#### Tier 2 — IT-специфичные

| Чат/Канал | Описание |
|-----------|----------|
| @Tools_Hacks | IT-рекрутеры, инструменты |
| @recrutach | IT-рекрутинг медиа (10k+) |
| @amazinghiring | AmazingHiring канал |
| Moscow IT HR Community | Столичные IT HR |
| Ukrainian Sourcing Community | 3,200+ |

#### Полный список — 121 чат

**Источник:** https://amazinghiring.ru/blog/2022/02/01/189-телеграм-чатов-для-it-рекрутеров/

### 1.2 Каналы с вакансиями (рекрутеры = авторы постов)

| Канал | Username | Описание |
|-------|----------|----------|
| HR 2.0 ВАКАНСИИ | @HRvacancy20 | Ежедневные HR вакансии |
| Удаленная работа для HR | @work_hr | Удалёнка для HR |
| Вакансии для HR от hh.ru | @hh_vacancy_hr | Официальный hh |
| Job for HR | @forhr | Международные позиции |

---

## 2. ИНСТРУМЕНТЫ ПАРСИНГА

### 2.1 Python библиотеки (MTProto API)

| Библиотека | Статус | Особенности |
|------------|--------|-------------|
| [Telethon](https://github.com/LonamiWebs/Telethon) | ✅ Активно | Основная, документация |
| [Pyrogram](https://github.com/pyrogram/pyrogram) | ⚠️ Unmaintained | Есть форки (WPyrogram, Kurigram) |

### 2.2 Готовые скрипты

| Инструмент | Функции | Экспорт | URL |
|------------|---------|---------|-----|
| Telsca | GUI, members, messages, media | CSV/JSON | https://github.com/JulietKiloCharlie/Telsca-Telegram-Scraper |
| telegram-scraper | Messages, media, realtime | JSON/CSV | https://github.com/unnohwn/telegram-scraper |
| telegram-member-scraper | Members export | CSV | https://github.com/ivanstruk/telegram-member-scraper |
| TelegramScraper | Members, research | CSV | https://github.com/TechRahul20/TelegramScraper |
| Telegram-Scrapper | Chat data, members, messages | JSON | https://github.com/Talish-wiz/Telegram-Scrapper |
| TeleGram-Scraper | All member info | — | https://github.com/th3unkn0n/TeleGram-Scraper |
| TG-Parser | Экспорт участников + сообщения | CSV/TXT | https://github.com/Grigorich-JSDio/TG-Parser |
| Telegradd | Scraper + Adder + Proxy | CSV | https://github.com/evilbream/Telegradd |

### 2.3 Ключевые методы Telethon

```python
from telethon import TelegramClient
from telethon.tl.types import ChannelParticipantsAdmins

# Инициализация
client = TelegramClient('session', api_id, api_hash)

# Получение участников (ВАЖНО: aggressive=True для >10k)
participants = await client.get_participants(
    entity,           # Чат/канал
    limit=None,       # Лимит (None = все)
    aggressive=True,  # КРИТИЧНО: иначе max 10k
    filter=None       # ChannelParticipantsAdmins и т.д.
)

# Получение полной инфы о юзере (включая bio)
user = await client.get_entity(user_id)  # По ID
user = await client.get_entity("@username")  # По username

# Доступные поля
user.id          # Permanent ID
user.username    # @username
user.first_name
user.last_name
user.phone       # Если доступен
# Для bio нужен Full user:
full = await client(GetFullUserRequest(user))
bio = full.full_user.about

# Профильные фото
photos = await client.get_profile_photos(user)
```

### 2.4 Технические лимиты Telegram API

| Параметр | Лимит | Обход |
|----------|-------|-------|
| get_participants без aggressive | 10,000 | `aggressive=True` |
| get_participants с aggressive | ~90%+ участников | A-Z поиск внутри |
| FloodWait | 30 сек — 24 часа | **Нет обхода**, только ждать |
| Рекомендуемая задержка | 1.5-3 сек | `random.uniform(1.5, 3.0)` |
| Безопасный rate | ~200 req/час | Ротация аккаунтов |

---

## 3. OSINT БОТЫ

### 3.1 Поиск групп пользователя

| Бот | Функция | База |
|-----|---------|------|
| @TgScanRobot | Группы по username/ID | 400k каналов, 70M юзеров |
| @ChatSearchRobot | Похожие группы | — |
| @SearcheeBot | Поиск в TG | — |

### 3.2 Информация о пользователе

| Бот | Функция |
|-----|---------|
| @IDBot / @userinfobot | Telegram ID по username |
| @UserInfoBot | Базовая инфа |
| @creaborbot | Дата создания аккаунта |
| @SangMata_BOT | История изменений username |

### 3.3 Пробив (серая зона)

| Бот | Данные | Примечание |
|-----|--------|------------|
| Глаз Бога | Phone → TG, email, VK | Платно, РФ данные |
| Quick OSINT | Комплексный пробив | Платно |
| GetContact бот | Phone → имя | База контактов |
| @PhoneLeaks_bot | Leaks по телефону | — |

---

## 4. ПОИСКОВЫЕ СИСТЕМЫ TELEGRAM

| Система | URL | Особенности |
|---------|-----|-------------|
| **TGStat** | https://tgstat.ru | 2.6M+ каналов, аналитика, API |
| **Lyzem** | https://lyzem.com | Глубокий поиск, Telegraph, бесплатно |
| **Telemetr** | https://telemetr.me | Аналитика, поиск |
| **Combot** | https://combot.org | Модерация, поиск в чатах |
| **TelegramDB** | — | История групп пользователя |
| **Telegago** | — | Google CSE для Telegram |

---

## 5. КЛЮЧЕВЫЕ ИДЕНТИФИКАТОРЫ

| ID | Изменяемый | Примечание |
|----|-----------|------------|
| **Telegram ID** | ❌ Никогда | Главный идентификатор для трекинга |
| Username (@) | ✅ Да | Публичный, можно менять |
| Phone | ✅ Да | Скрыт по умолчанию |
| Display Name | ✅ Да | Не уникален |

**Важно:** Telegram ID — постоянный, присваивается при регистрации. Даже если юзер сменит username — ID останется.

---

## 6. WORKFLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                    ЭТАП 1: ПОДГОТОВКА                           │
├─────────────────────────────────────────────────────────────────┤
│ 1. Получить API credentials (my.telegram.org)                   │
│ 2. Создать отдельный аккаунт (НЕ основной!)                     │
│ 3. Установить Telethon + зависимости                            │
│ 4. Вступить в целевые HR-чаты (см. список выше)                 │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ЭТАП 2: СБОР ЧАТОВ                           │
├─────────────────────────────────────────────────────────────────┤
│ 1. TGStat → поиск "HR", "рекрутер", "IT recruiter"              │
│ 2. Lyzem → глубокий поиск по ключевым словам                    │
│ 3. @ChatSearchRobot → похожие группы                            │
│ 4. AmazingHiring список (121 чат)                               │
│                                                                 │
│ Результат: 50-150 релевантных чатов                             │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ЭТАП 3: ПАРСИНГ УЧАСТНИКОВ                   │
├─────────────────────────────────────────────────────────────────┤
│ Для каждого чата:                                               │
│ 1. get_participants(aggressive=True)                            │
│ 2. Извлечь: user_id, username, first_name, last_name            │
│ 3. Задержка 2-5 сек между чатами                                │
│ 4. Экспорт в CSV/JSON                                           │
│                                                                 │
│ Результат: 50,000-100,000 raw записей                           │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ЭТАП 4: ОБОГАЩЕНИЕ                           │
├─────────────────────────────────────────────────────────────────┤
│ Для username с bio/name содержащим "recruiter", "HR", "рекрутер"│
│ 1. get_entity(user) → полная инфа + bio                         │
│ 2. Фильтрация по bio keywords                                   │
│ 3. Проверка через @TgScanRobot (какие ещё группы)               │
│                                                                 │
│ Результат: 5,000-15,000 верифицированных рекрутеров             │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ЭТАП 5: ФИНАЛИЗАЦИЯ                          │
├─────────────────────────────────────────────────────────────────┤
│ 1. Дедупликация по user_id                                      │
│ 2. Фильтрация ботов (is_bot flag)                               │
│ 3. Сортировка по релевантности                                  │
│ 4. Экспорт финальной базы                                       │
│                                                                 │
│ Финал: CSV с username, name, bio, user_id                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. ФИЛЬТРАЦИЯ ПО КЛЮЧЕВЫМ СЛОВАМ

### Bio/Name keywords (русский)
```
рекрутер, HR, эйчар, хедхантер, talent, sourcer,
сорсер, подбор персонала, кадры, найм, hiring,
IT рекрутер, технический рекрутер
```

### Bio/Name keywords (английский)
```
recruiter, HR, headhunter, talent acquisition,
sourcer, hiring, staffing, recruitment,
tech recruiter, IT recruiter, technical recruiter
```

---

## 8. РИСКИ И MITIGATION

| Риск | Вероятность | Решение |
|------|------------|---------|
| FloodWait | Высокая | Задержки 2-5 сек, ротация аккаунтов |
| Бан аккаунта | Средняя | НЕ использовать основной аккаунт |
| Неполные данные | Средняя | aggressive=True |
| Боты в выборке | Высокая | Фильтр is_bot |
| Юридические | Низкая | Только публичные данные |

---

## 9. TECH STACK

```
Python 3.10+
├── telethon          # MTProto API
├── pandas            # Обработка данных
├── aiofiles          # Async I/O
├── tqdm              # Progress bars
├── python-dotenv     # Credentials
└── aiosqlite         # Локальная БД (опционально)
```

### requirements.txt
```
telethon>=1.28.0
pandas>=2.0.0
aiofiles>=23.0.0
tqdm>=4.65.0
python-dotenv>=1.0.0
```

---

## 10. ПОЛЕЗНЫЕ ССЫЛКИ

### Документация
- Telethon Docs: https://docs.telethon.dev/
- Telegram API: https://core.telegram.org/api
- TGStat API: https://tgstat.ru/en/api

### GitHub репозитории
- Awesome-Telegram-OSINT: https://github.com/ItIsMeCall911/Awesome-Telegram-OSINT
- The-Osint-Toolbox/Telegram-OSINT: https://github.com/The-Osint-Toolbox/Telegram-OSINT
- Telethon: https://github.com/LonamiWebs/Telethon
- Telsca: https://github.com/JulietKiloCharlie/Telsca-Telegram-Scraper

### Списки HR-чатов
- AmazingHiring (121 чат): https://amazinghiring.ru/blog/2022/02/01/189-телеграм-чатов-для-it-рекрутеров/
- HR-Telegram рейтинг: https://hr-telegram.ru/
- Kadrof.ru (24 канала): https://www.kadrof.ru/articles/105625
- Huntflow (70+ каналов): https://huntflow.media/more-telegram/

### Поисковики
- TGStat: https://tgstat.ru
- Lyzem: https://lyzem.com
- Telemetr: https://telemetr.me

---

## 11. ПРИМЕР СКРИПТА

```python
#!/usr/bin/env python3
"""
Базовый скрипт для парсинга участников HR-чатов
"""

import asyncio
import csv
import random
from telethon import TelegramClient
from telethon.tl.functions.users import GetFullUserRequest
from tqdm import tqdm

API_ID = 'YOUR_API_ID'
API_HASH = 'YOUR_API_HASH'
PHONE = '+YOUR_PHONE'

# Целевые чаты
TARGET_CHATS = [
    'job_in_hr',
    'hr_recr',
    'rff_chat',
    # добавить остальные
]

# Ключевые слова для фильтрации
KEYWORDS = [
    'recruiter', 'рекрутер', 'hr', 'эйчар',
    'headhunter', 'хедхантер', 'sourcer', 'сорсер',
    'talent', 'hiring', 'найм', 'подбор'
]

async def main():
    client = TelegramClient('hr_scraper', API_ID, API_HASH)
    await client.start(phone=PHONE)

    all_users = {}

    for chat in TARGET_CHATS:
        print(f"\n[*] Парсинг: {chat}")
        try:
            participants = await client.get_participants(
                chat,
                aggressive=True
            )

            for user in tqdm(participants):
                if user.bot:
                    continue

                all_users[user.id] = {
                    'user_id': user.id,
                    'username': user.username or '',
                    'first_name': user.first_name or '',
                    'last_name': user.last_name or '',
                    'source_chat': chat
                }

            # Задержка между чатами
            await asyncio.sleep(random.uniform(3, 7))

        except Exception as e:
            print(f"[!] Ошибка {chat}: {e}")
            continue

    # Экспорт в CSV
    with open('hr_users_raw.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'user_id', 'username', 'first_name', 'last_name', 'source_chat'
        ])
        writer.writeheader()
        writer.writerows(all_users.values())

    print(f"\n[+] Собрано {len(all_users)} уникальных пользователей")
    await client.disconnect()

if __name__ == '__main__':
    asyncio.run(main())
```

---

*Документ создан: 2026-01-29*
*Автор: Claude Code OSINT Research*
