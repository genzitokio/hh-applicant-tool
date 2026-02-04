# OSINT-анализ IT HR чатов

## Целевые чаты

| Чат | Участников | Тип |
|-----|-----------|-----|
| @itrecruitergroup | ~14,000 | Группа |
| @ITrecruiters_community | ~1,800 | Канал |
| @ITHRchat | ~1,500 | Группа |

**Итого:** ~17,000 участников (с пересечениями)

---

## Цель

Найти IT-рекрутеров которые:
1. Активно нанимают Frontend/React разработчиков
2. Работают с РФ-рынком
3. Реально рекрутеры (не боты, не "ищу работу")

---

## Многоаспектный анализ

### Аспект 1: Анализ сообщений (Message Mining)

**Что ищем:**
- Вакансии с ключевыми словами: React, Frontend, TypeScript, Next.js, Vue
- Паттерны постинга вакансий (формат, контакты)
- Авторы постов с вакансиями → username рекрутеров

**Инструменты:**
```
Telegram Desktop Export → JSON
          ↓
Python скрипт анализа
          ↓
Список авторов вакансий + частота
```

**Фильтры сообщений:**
- Содержит: "вакансия", "ищем", "требуется", "frontend", "react", "зп", "оффер"
- Не содержит: "ищу работу", "резюме", "в поиске"

### Аспект 2: Анализ участников (Member Analysis)

**Что собираем:**
- user_id (постоянный)
- username
- first_name, last_name
- bio (если доступен)

**Фильтрация по keywords в имени/bio:**
```
recruiter, рекрутер, HR, эйчар, headhunter,
talent, sourcer, сорсер, hiring, найм
```

**Negative keywords (исключаем):**
```
ищу работу, в поиске, junior hr, hr intern,
looking for, job seeker
```

### Аспект 3: Перекрёстный анализ (Cross-Reference)

**Логика:** Если человек состоит в 2+ HR-чатах → скорее всего рекрутер

```
Участники @itrecruitergroup
         ∩
Участники @ITHRchat
         ∩
Участники @ITrecruiters_community
         ↓
Высокая вероятность = реальный HR
```

### Аспект 4: OSINT-обогащение

**Для top-кандидатов:**

| Инструмент | Данные |
|------------|--------|
| @TgScanRobot | В каких ещё группах состоит |
| @SangMata_BOT | История username (стабильный = надёжный) |
| Lyzem.com | Упоминания в других каналах |
| LinkedIn (manual) | Подтверждение должности |

### Аспект 5: Анализ активности

**Метрики:**
- Последнее сообщение в чате (активен?)
- Частота постинга вакансий
- Ответы на вопросы (реальный человек vs бот)

---

## Инструменты

### Этап 1: Сбор данных

| Что | Инструмент | Выход |
|-----|------------|-------|
| Сообщения | Telegram Desktop Export | JSON |
| Сообщения (альт) | telegram-scraper | JSON/CSV |
| Участники | Telsca или TG-Parser | CSV |
| Участники (альт) | Telethon скрипт | CSV |

### Этап 2: Обработка

| Что | Инструмент |
|-----|------------|
| Парсинг JSON/CSV | Python + pandas |
| Фильтрация по keywords | regex |
| Дедупликация | pandas (by user_id) |
| Перекрёстный анализ | pandas merge |

### Этап 3: Обогащение

| Что | Инструмент |
|-----|------------|
| Группы пользователя | @TgScanRobot (через Telegram MCP) |
| История username | @SangMata_BOT |
| Поиск упоминаний | Lyzem.com |

### Этап 4: Интеграция

```
Финальный список HR
        ↓
/hr-import или ручное добавление
        ↓
hr_database.yaml (status: pending)
        ↓
Модерация: /hr-approve или /hr-reject
```

---

## Workflow

### Фаза 1: Экспорт данных (ручная)

```bash
# Вариант A: Telegram Desktop
1. Открыть чат в Telegram Desktop
2. ⋮ → Export chat history
3. Выбрать: JSON, без медиа
4. Повторить для всех 3 чатов

# Вариант B: Telsca (GUI)
1. git clone https://github.com/JulietKiloCharlie/Telsca-Telegram-Scraper
2. pip install -r requirements.txt
3. python telsca.py
4. Ввести API credentials
5. Экспортировать members + messages
```

### Фаза 2: Анализ сообщений

```python
# Псевдокод анализа
import json
import re
from collections import Counter

# Загрузить экспорт
with open('itrecruitergroup_export.json') as f:
    data = json.load(f)

# Keywords для вакансий frontend
vacancy_keywords = [
    r'react', r'frontend', r'фронтенд', r'typescript',
    r'next\.?js', r'vue', r'вакансия', r'ищем разработчика'
]

# Найти авторы вакансий
vacancy_authors = []
for msg in data['messages']:
    text = msg.get('text', '').lower()
    if any(re.search(kw, text) for kw in vacancy_keywords):
        if 'from_id' in msg:
            vacancy_authors.append(msg['from_id'])

# Топ авторов
print(Counter(vacancy_authors).most_common(50))
```

### Фаза 3: Анализ участников

```python
# Фильтрация по keywords
import pandas as pd

members = pd.read_csv('members.csv')

hr_keywords = ['recruiter', 'рекрутер', 'hr', 'эйчар',
               'headhunter', 'talent', 'sourcer', 'hiring']

negative = ['ищу работу', 'в поиске', 'looking for']

def is_hr(row):
    text = f"{row.get('first_name', '')} {row.get('last_name', '')} {row.get('username', '')}".lower()
    if any(neg in text for neg in negative):
        return False
    return any(kw in text for kw in hr_keywords)

hr_members = members[members.apply(is_hr, axis=1)]
```

### Фаза 4: Перекрёстный анализ

```python
# Найти пересечения между чатами
members1 = pd.read_csv('itrecruitergroup_members.csv')
members2 = pd.read_csv('ITHRchat_members.csv')
members3 = pd.read_csv('ITrecruiters_community_members.csv')

# Объединить по user_id
all_members = pd.concat([members1, members2, members3])
cross_ref = all_members.groupby('user_id').size()

# Кто в 2+ чатах
multi_chat = cross_ref[cross_ref >= 2].index
high_prob_hr = all_members[all_members['user_id'].isin(multi_chat)]
```

### Фаза 5: Финальный список

```python
# Объединить все источники
final_hr = pd.concat([
    vacancy_authors_df,      # Авторы вакансий
    hr_by_keywords,          # По keywords
    multi_chat_members       # В нескольких чатах
]).drop_duplicates('user_id')

# Экспорт для /hr-import
final_hr.to_csv('hr_candidates.csv', index=False)
```

---

## Ожидаемые результаты

| Этап | Вход | Выход |
|------|------|-------|
| Сбор | 3 чата | ~17k записей |
| Дедупликация | 17k | ~12k уникальных |
| Фильтр keywords | 12k | ~2-3k потенциальных HR |
| Авторы вакансий | Сообщения | ~500 активных |
| Перекрёстный | 3 списка | ~1k в 2+ чатах |
| **Финал** | — | **500-1500 релевантных HR** |

---

## Файлы

```
/home/flyingkuskus/AutoKus/
├── osint/
│   ├── exports/              # Экспорты из Telegram
│   │   ├── itrecruitergroup.json
│   │   ├── ITHRchat.json
│   │   └── ITrecruiters_community.json
│   ├── members/              # Списки участников
│   │   ├── itrecruitergroup_members.csv
│   │   └── ...
│   ├── analysis/             # Результаты анализа
│   │   ├── vacancy_authors.csv
│   │   ├── hr_by_keywords.csv
│   │   └── final_candidates.csv
│   └── scripts/              # Скрипты анализа
│       ├── analyze_messages.py
│       ├── filter_members.py
│       └── cross_reference.py
```

---

## Следующие шаги

1. [ ] Вступить в чаты (если ещё нет)
2. [ ] Экспортировать сообщения (Telegram Desktop)
3. [ ] Экспортировать участников (Telsca)
4. [ ] Написать скрипты анализа
5. [ ] Запустить анализ
6. [ ] /hr-import результатов
7. [ ] Модерация через /hr-pending, /hr-approve
