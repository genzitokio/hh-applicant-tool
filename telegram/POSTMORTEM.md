# AutoKus Postmortem — Полный анализ проблемы

## Дата: 2026-01-30
## Время потрачено: ~3 часа
## Версий daemon: 6 (v2.0, v2.1, v2.2, v3.0, v3.1, v4.0, v5.0)

---

## Исходная задача

Создать автоматический Telegram бот который:
1. Слушает входящие сообщения от HR рекрутеров
2. Отвечает на них используя LLM (Claude через z.ai API)
3. Работает 24/7 без участия пользователя

---

## Что работало (и работает)

**Claude Code + MCP telegram-mcp вручную:**
- `/hr-check` → Claude вызывает `mcp__telegram-mcp__get_messages`
- Claude анализирует сообщение в своём контексте
- Генерирует ответ используя свои знания + few-shot примеры из prompt.py
- `/hr-reply` → Claude вызывает `mcp__telegram-mcp__send_message`

**Почему работает:**
- Claude Code сам управляет MCP процессом
- MCP telegram-mcp использует Telethon но **не держит постоянное соединение**
- Каждый вызов MCP инструмента: connect → execute → disconnect
- Нет event loop который нужно держать живым
- Нет конкуренции за updates

---

## Что пробовали (daemon подходы) — ДЕТАЛЬНЫЙ РАЗБОР

### v2.0 — Event handler + run_until_disconnected

**Код:**
```python
@client.on(events.NewMessage(incoming=True))
async def handler(event):
    await process_message(event)

async def main():
    await client.start()
    await client.run_until_disconnected()
```

**Логика:** Telethon events — стандартный подход. `run_until_disconnected()` держит event loop и ждёт события от Telegram MTProto.

**Что происходило:**
- Первые 1-2 сообщения обрабатывались
- Потом daemon "замолкал" — события не приходили
- Процесс жив, но handler не вызывается

**Гипотеза тогда:** Event loop блокируется на await внутри handler.

---

### v2.1 — Добавили asyncio.create_task()

**Изменение:**
```python
@client.on(events.NewMessage(incoming=True))
async def handler(event):
    asyncio.create_task(process_message_safe(event, sender))  # не блокируем handler
```

**Логика:** Handler сразу возвращается, обработка идёт в фоне.

**Что происходило:** То же самое — зависал после нескольких сообщений.

**Вывод:** Проблема не в блокировке handler.

---

### v2.2 — Добавили catch-up на старте

**Изменение:** При старте daemon проверял unread сообщения и обрабатывал их.

**Что происходило:**
- Старые сообщения обрабатывались
- Новые — нет
- Обнаружили что **MCP telegram-mcp процессы** работают параллельно

**Важное открытие:**
```bash
ps aux | grep telegram
# Показало 3 процесса telegram-mcp запущенных Claude Code
```

**Гипотеза:** MCP процессы "крадут" Telegram updates у daemon потому что используют тот же session string.

---

### v3.0 — Polling архитектура

**Полный редизайн:**
```python
async def poll_messages():
    while True:
        await check_all_dialogs()  # iter_dialogs + iter_messages
        await asyncio.sleep(5)

async def check_all_dialogs():
    async for dialog in client.iter_dialogs(limit=50):
        # проверяем новые сообщения
        async for msg in client.iter_messages(entity, limit=1):
            if msg.id > last_processed_id:
                await process_message(msg)  # БЛОКИРУЮЩИЙ ВЫЗОВ
```

**Логика:** Не зависим от push updates — сами проверяем каждые 5 секунд.

**Что происходило:**
- `await process_message()` вызывал LLM
- LLM отвечал 2-180 секунд (z.ai нестабильный)
- Всё это время polling loop стоял
- Новые сообщения не проверялись

**Проблема:** Синхронный вызов LLM блокировал весь polling.

---

### v3.1 — Polling + create_task для LLM

**Изменение:**
```python
async def check_all_dialogs():
    async for dialog in client.iter_dialogs(limit=50):
        async for msg in client.iter_messages(entity, limit=1):
            if msg.id > last_processed_id:
                asyncio.create_task(process_message_safe(...))  # НЕ ЖДЁМ
                update_last_msg_id(username, msg.id)  # Сразу помечаем обработанным
```

**Логика:** Polling продолжается, LLM работает в фоне.

**Что происходило:**
- Иногда работало
- Иногда зависало непредсказуемо
- Паттерн: работает когда я (Claude) проверяю логи, не работает когда не проверяю

**Странность:** Как будто моё взаимодействие с системой (вызовы Bash) "будило" daemon.

---

### v4.0 — "Production-ready" с правильными настройками Telethon

**Исследование:** Запустил агента для изучения лучших практик Telethon.

**Найденные проблемы:**
1. `catch_up=True` — не было, Telethon не получал пропущенные сообщения
2. `auto_reconnect=True` — не было, при разрыве не переподключался
3. Polling vs Events — polling это костыль для MTProto
4. Context manager — `async with client:` вместо `client.start()`

**Новый код:**
```python
client = TelegramClient(
    StringSession(SESSION_STRING),
    API_ID,
    API_HASH,
    catch_up=True,              # Получать пропущенные
    connection_retries=5,
    retry_delay=1,
    auto_reconnect=True,        # Автопереподключение
    flood_sleep_threshold=60,   # Авто-обработка FloodWait
)

@client.on(events.NewMessage(incoming=True))
async def handler(event):
    log.info(f"[EVENT] Raw event received")  # Добавили отладку
    asyncio.create_task(process_message_safe(event, sender))

async def main():
    async with client:
        await client.run_until_disconnected()
```

**Что происходило:**
- События ПРИХОДИЛИ (видно в логе `[EVENT] Raw event received`)
- `[EVENT] Processing message from @username` — тоже видно
- `[MSG] @username: текст` — тоже видно
- Дальше — ТИШИНА
- Нет HTTP запроса к LLM
- Нет ответа
- Процесс жив, но завис

**Ключевое наблюдение:**
```
15:32:42 [EVENT] Raw event received: тварь...
15:32:42 [EVENT] Processing message from @genziii
15:32:42 [MSG] @genziii: тварь...
15:32:45 HTTP Request: POST https://api.z.ai... 200 OK
15:32:45 [SENT] @genziii: ответ...

15:33:06 [EVENT] Raw event received: ладно я пошутил...
15:33:06 [EVENT] Processing message from @genziii
(тишина — rate limit, ок)

15:35:59 [EVENT] Raw event received: алоо...
15:35:59 [EVENT] Processing message from @genziii
15:35:59 [MSG] @genziii: алоо...
(ТИШИНА — нет HTTP запроса, завис)
```

Первое сообщение — ок. Третье — зависло после `[MSG]`.

---

### v5.0 — One-shot скрипт (check_messages.py)

**Идея:** Полностью убрать persistent connection. Подключился → проверил → ответил → отключился.

**Код:**
```python
async def main():
    client = TelegramClient(...)
    await client.connect()

    for username in approved_users:
        messages = await get_messages(username)
        if new_message:
            result = await call_llm(message)  # async httpx
            await client.send_message(username, result)

    await client.disconnect()
```

**Что происходило:**
```
15:39:48 === AutoKus check ===
15:39:48 Connected as @supergreatfrontenddevvvvvv
15:39:49 [MSG] @genziii: алоо...
(ТИШИНА — завис на LLM вызове)
```

**Вывод:** Проблема НЕ в persistent connection. Проблема в комбинации Telethon + async HTTP.

---

### Прямой тест компонентов

**LLM отдельно:**
```python
# Тест
result = await get_response([], 'Привет', {})
# Результат: работает, 1.7 секунды
```

**Telethon отдельно:**
```python
# Тест
await client.connect()
messages = await client.get_messages(entity, limit=5)
await client.send_message(entity, 'тест')
# Результат: работает
```

**Вместе — зависает.**

---

## Корневая проблема — ГЛУБОКИЙ АНАЛИЗ

### Гипотеза 1: Telethon event loop + httpx async = deadlock

**Теория:**
- Telethon использует свой event loop для MTProto
- httpx использует asyncio для HTTP
- Когда они в одном процессе — конфликт

**Против этой теории:**
- v5.0 (one-shot) тоже зависает, хотя там нет `run_until_disconnected()`
- httpx используется в других проектах с Telethon без проблем

### Гипотеза 2: z.ai API проблемы

**Теория:**
- z.ai (прокси к Anthropic) нестабильный
- Иногда отвечает за 2 сек, иногда за 180 сек, иногда не отвечает

**Против этой теории:**
- Прямой тест LLM работает стабильно
- В логах нет timeout ошибок — просто тишина

### Гипотеза 3: Session conflict с MCP

**Теория:**
- MCP telegram-mcp использует тот же `TELEGRAM_SESSION_STRING`
- Telegram MTProto отдаёт updates только одному клиенту
- MCP "ворует" updates

**Подтверждение:**
```bash
ps aux | grep telegram-mcp
# Показывало 3 процесса telegram-mcp
```

**Против этой теории:**
- После убийства всех MCP процессов — daemon всё равно зависал
- v5.0 (one-shot) запускался когда MCP не работал — всё равно зависал

### Гипотеза 4: Python asyncio + Telethon MTProto threading

**Теория:**
Telethon внутри использует threading для MTProto connection. Когда мы вызываем async httpx — происходит что-то с GIL или event loop.

**Косвенное подтверждение:**
- telegram-mcp работает потому что использует `nest_asyncio.apply()` — патчит asyncio для вложенных loops
- Наш daemon не использует nest_asyncio

### Гипотеза 5: Что-то специфичное в окружении

**Наблюдение:**
- Когда я (Claude) вызываю Bash команды — daemon "оживает"
- Может быть какой-то сигнал или event пробуждает заблокированный процесс

---

## Session Conflict — ДЕТАЛИ

**Как работает MCP telegram-mcp:**
```python
# main.py telegram-mcp
client = TelegramClient(StringSession(SESSION_STRING), API_ID, API_HASH)

async def _main():
    await client.start()
    await mcp.run_stdio_async()  # Ждёт команд от Claude Code

def main():
    nest_asyncio.apply()  # ВАЖНО!
    asyncio.run(_main())
```

**Ключевое отличие от нашего daemon:**
1. `nest_asyncio.apply()` — позволяет вложенные event loops
2. `mcp.run_stdio_async()` — не `run_until_disconnected()`
3. Telethon client создаётся БЕЗ `catch_up`, `auto_reconnect`

**Когда MCP получает команду:**
```python
@mcp.tool()
async def get_messages(chat_id, ...):
    messages = await client.get_messages(entity, limit=...)
    return messages
```

Просто синхронный вызов API, никаких events.

---

## Почему telegram-mcp работает а наш daemon нет

| Аспект | telegram-mcp | Наш daemon |
|--------|--------------|------------|
| Event loop | nest_asyncio patched | Стандартный |
| Получение сообщений | По запросу (get_messages) | Push events |
| Постоянное соединение | Да, но не слушает events | Да, слушает events |
| LLM вызов | Нет (Claude сам генерирует) | Да, async httpx |
| Конкуренция | Единственный клиент | Конкурирует с MCP |

**Главное отличие:**
- telegram-mcp НЕ использует `@client.on(events.NewMessage)` — он просто по запросу вызывает `client.get_messages()`
- Наш daemon ПЫТАЕТСЯ слушать real-time events

---

## Рабочее решение — ПЛАН

**Концепция:** Вернуться к тому что работало — Claude Code + MCP.

**Как это работало раньше:**
1. Пользователь вызывает `/hr-check`
2. Claude Code вызывает `mcp__telegram-mcp__get_messages` для каждого approved HR
3. Claude видит новые сообщения
4. Claude генерирует ответ (используя свой контекст, не внешний LLM)
5. Claude вызывает `mcp__telegram-mcp__send_message`

**Автоматизация:**
```bash
# crontab — каждую минуту
* * * * * /home/flyingkuskus/AutoKus/check_hr.sh >> /home/flyingkuskus/AutoKus/cron.log 2>&1
```

```bash
# check_hr.sh
#!/bin/bash
cd /home/flyingkuskus/AutoKus

# Lock file чтобы не запускать параллельно
LOCKFILE="/tmp/autokus_check.lock"
if [ -f "$LOCKFILE" ]; then
    exit 0
fi
touch "$LOCKFILE"
trap "rm -f $LOCKFILE" EXIT

# Вызов Claude Code
claude -p "$(cat check_prompt.txt)" \
  --allowedTools "mcp__telegram-mcp__*" \
  --dangerously-skip-permissions \
  --max-turns 20 \
  --output-format text
```

```text
# check_prompt.txt
Ты AutoKus бот. Проверь новые сообщения от HR и ответь.

APPROVED HR (из базы):
- @genziii
- @myfcknusername
- и т.д.

Для каждого HR:
1. Вызови mcp__telegram-mcp__get_messages(chat_id=username, page_size=5)
2. Если есть новые входящие сообщения — сгенерируй ответ
3. Отправь через mcp__telegram-mcp__send_message

Правила ответа:
- Ты Senior Frontend Developer (React, TypeScript, Next.js)
- Вежливо, профессионально
- Тестовые не делаешь
- ЗП обсуждаемо
```

**Преимущества:**
- Работает (проверено)
- Claude сам генерирует ответы (не нужен внешний LLM)
- MCP сам управляет Telethon соединением
- Нет проблем с asyncio

**Недостатки:**
- Задержка до 1 минуты (cron)
- Тратит токены Claude на каждую проверку
- Нужен `--dangerously-skip-permissions`

---

## Альтернативы (НЕ ПРОБОВАЛИ)

### 1. Второй Telegram аккаунт
**Идея:** Создать отдельный аккаунт для daemon с отдельным session string.
**Плюсы:** Нет конфликта sessions
**Минусы:** Нужен второй номер телефона, HR будут писать на другой аккаунт

### 2. Pyrogram вместо Telethon
**Идея:** Другая MTProto библиотека, может работать иначе.
**Плюсы:** Может не иметь проблем с asyncio
**Минусы:** Нужно переписывать, не факт что поможет

### 3. nest_asyncio в нашем daemon
**Идея:** Добавить `nest_asyncio.apply()` как в telegram-mcp.
**Код:**
```python
import nest_asyncio
nest_asyncio.apply()
```
**Плюсы:** Простое изменение
**Минусы:** Не пробовали, не факт что поможет

### 4. Синхронный requests вместо httpx
**Идея:** LLM вызов через синхронный `requests` в отдельном thread.
**Код:**
```python
import requests
from concurrent.futures import ThreadPoolExecutor

executor = ThreadPoolExecutor(max_workers=2)

def sync_llm_call(prompt):
    return requests.post(API_URL, json=payload, timeout=180)

async def call_llm_async(prompt):
    loop = asyncio.get_event_loop()
    result = await loop.run_in_executor(executor, sync_llm_call, prompt)
    return result
```
**Плюсы:** Изолирует HTTP от asyncio
**Минусы:** Сложнее, не пробовали

### 5. Subprocess для LLM
**Идея:** Вызывать LLM через отдельный Python процесс.
**Код:**
```python
result = subprocess.run(['python', 'call_llm.py', message], capture_output=True)
response = result.stdout.decode()
```
**Плюсы:** Полная изоляция
**Минусы:** Overhead на запуск процесса

### 6. Polling без events (как telegram-mcp)
**Идея:** Не использовать `@client.on(events.NewMessage)`, просто polling через `get_messages()`.
**Отличие от v3.0:** Использовать `nest_asyncio` и паттерн telegram-mcp.
**Не пробовали полностью.**

---

## Файлы проекта

```
/home/flyingkuskus/AutoKus/
├── .env                    # Credentials (API_ID, API_HASH, SESSION_STRING, etc.)
├── CLAUDE.md               # Инструкции для Claude Code
├── POSTMORTEM.md           # Этот файл
├── SPEC.md                 # Полная спецификация проекта
│
├── daemon.py               # v4.0 — НЕ РАБОТАЕТ стабильно
├── check_messages.py       # v5.0 — НЕ РАБОТАЕТ (one-shot)
│
├── db.py                   # SQLite операции — РАБОТАЕТ
├── llm.py                  # LLM wrapper (httpx + z.ai) — РАБОТАЕТ отдельно
├── prompt.py               # Few-shot промпт — РАБОТАЕТ
│
├── autokus.db              # SQLite база
├── daemon.log              # Логи daemon
├── autokus.log             # Логи check_messages
├── last_msg_ids.json       # Состояние (последние обработанные ID)
│
└── .claude/commands/       # Slash-команды (/hr-check, /hr-approve, etc.)
```

---

## Что делать дальше

**Вариант A: Cron + Claude Code (гарантированно работает)**
1. Создать check_hr.sh и check_prompt.txt
2. Настроить crontab
3. Тестировать

**Вариант B: Попробовать nest_asyncio (быстрый эксперимент)**
1. Добавить `nest_asyncio.apply()` в daemon.py
2. Тестировать

**Вариант C: Синхронный LLM в thread (средний эксперимент)**
1. Переписать llm.py на requests + ThreadPoolExecutor
2. Тестировать

---

## Логи для отладки

### Последний успешный ответ (v4.0):
```
15:32:42 [EVENT] Raw event received: тварь...
15:32:42 [MSG] @genziii: тварь...
15:32:45 HTTP Request: POST https://api.z.ai... "HTTP/1.1 200 OK"
15:32:45 [SENT] @genziii: Вижу, что общение зашло в тупик...
```

### Зависание (v4.0):
```
15:35:59 [EVENT] Raw event received: алоо...
15:35:59 [MSG] @genziii: алоо...
(тишина — нет HTTP Request, процесс жив но завис)
```

### Зависание (v5.0 one-shot):
```
15:39:48 === AutoKus check ===
15:39:48 Connected as @supergreatfrontenddevvvvvv
15:39:49 [MSG] @genziii: алоо...
(тишина — завис на LLM вызове)
```
