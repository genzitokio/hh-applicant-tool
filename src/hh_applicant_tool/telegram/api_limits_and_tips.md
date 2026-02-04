# Telegram API: Лимиты, ограничения и советы

## Получение API Credentials

1. Перейти на https://my.telegram.org
2. Авторизоваться по номеру телефона
3. Перейти в "API development tools"
4. Заполнить форму → получить `api_id` и `api_hash`

**Важно:** Эти credentials привязаны к аккаунту. Используй отдельный аккаунт для парсинга!

---

## FloodWait — главное ограничение

### Что это
FloodWait — механизм rate limiting в Telegram. При превышении лимита получаешь ошибку:
```
telethon.errors.rpcerrorlist.FloodWaitError: A wait of X seconds is required
```

### Характеристики
- **Длительность:** от 30 секунд до 24+ часов
- **Обход:** НЕТ легального способа обойти
- **Единственное решение:** ждать указанное время

### Telegram официально:
> "It is useless and harmful to know the exact limits. Even if you knew the limits, you would still have to handle flood wait errors."

Telegram **намеренно** не публикует точные лимиты.

---

## get_participants — ключевой метод

### Без aggressive
```python
participants = await client.get_participants(chat)
# Максимум: ~10,000 участников
```

### С aggressive=True
```python
participants = await client.get_participants(chat, aggressive=True)
# Результат: ~90%+ участников
# Метод: внутренний A-Z поиск по участникам
```

**Всегда используй `aggressive=True` для больших групп!**

---

## Рекомендуемые задержки

| Операция | Минимальная задержка | Рекомендуемая |
|----------|---------------------|---------------|
| Между запросами | 1 сек | 1.5-3 сек |
| Между чатами | 3 сек | 5-10 сек |
| После ошибки | FloodWait время | +10% сверху |

### Код для безопасной задержки
```python
import random
import asyncio

async def safe_delay():
    delay = random.uniform(1.5, 3.0)
    await asyncio.sleep(delay)
```

---

## Ротация аккаунтов

Для масштабного парсинга используй несколько аккаунтов:

```python
ACCOUNTS = [
    {'api_id': 111, 'api_hash': 'aaa', 'phone': '+111'},
    {'api_id': 222, 'api_hash': 'bbb', 'phone': '+222'},
    {'api_id': 333, 'api_hash': 'ccc', 'phone': '+333'},
]

current_account = 0

async def get_client():
    global current_account
    acc = ACCOUNTS[current_account]
    current_account = (current_account + 1) % len(ACCOUNTS)
    return TelegramClient(f'session_{acc["phone"]}', acc['api_id'], acc['api_hash'])
```

---

## Обработка FloodWait

```python
from telethon.errors import FloodWaitError

async def safe_get_participants(client, chat):
    try:
        return await client.get_participants(chat, aggressive=True)
    except FloodWaitError as e:
        print(f"FloodWait: ждём {e.seconds} секунд")
        await asyncio.sleep(e.seconds + 10)  # +10 сек запаса
        return await safe_get_participants(client, chat)  # Retry
```

---

## Что можно получить о пользователе

### Базовая информация (User)
```python
user = await client.get_entity(user_id)

user.id           # int — постоянный ID
user.username     # str или None
user.first_name   # str
user.last_name    # str или None
user.phone        # str или None (обычно скрыт)
user.bot          # bool
user.verified     # bool
user.restricted   # bool
user.deleted      # bool
```

### Полная информация (UserFull)
```python
from telethon.tl.functions.users import GetFullUserRequest

full = await client(GetFullUserRequest(user))

full.full_user.about      # str — bio
full.full_user.common_chats_count  # int
full.full_user.blocked    # bool
```

### Фото профиля
```python
photos = await client.get_profile_photos(user)
# Возвращает список Photo объектов

# Скачать первое фото
if photos:
    await client.download_media(photos[0], 'photo.jpg')
```

---

## Ограничения по типу чата

| Тип | Парсинг участников | Примечание |
|-----|-------------------|------------|
| Публичная группа | ✅ Да | Нужно быть участником |
| Приватная группа | ✅ Да | Только если ты участник |
| Канал | ⚠️ Ограничено | Только если есть чат для комментариев |
| Личные сообщения | ❌ Нет | — |

---

## Риски бана

### Высокий риск
- Массовый парсинг без задержек
- Спам-рассылки
- Добавление людей в группы без согласия

### Средний риск
- Парсинг с малыми задержками (<1 сек)
- Много запросов get_entity подряд
- Парсинг сразу после создания аккаунта

### Низкий риск
- Парсинг с задержками 2-5 сек
- Использование старого аккаунта (6+ месяцев)
- Естественное поведение (чтение сообщений, реакции)

---

## Советы по безопасности

1. **Не используй основной аккаунт** — заведи отдельный
2. **Прогрей аккаунт** — пообщайся в чатах несколько дней перед парсингом
3. **Используй residential IP** — не VPN/datacenter
4. **Добавляй рандом** — не делай запросы с идеальной периодичностью
5. **Сохраняй сессию** — не перелогинивайся часто
6. **Мониторь FloodWait** — если частые, увеличь задержки

---

## Полезные ссылки

- Telethon документация: https://docs.telethon.dev/
- Telegram API ошибки: https://core.telegram.org/api/errors
- Telethon FloodWait: https://docs.telethon.dev/en/stable/quick-references/faq.html#my-account-was-limited
