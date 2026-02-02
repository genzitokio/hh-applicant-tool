# HH.ru Test Responses - Orchestration Architecture

## 1. Архитектура без оркестратора (простой вариант)

```
                    +------------------+
                    |   tmux session   |
                    |   "hh-workers"   |
                    +------------------+
                            |
         +------------------+------------------+------------------+------------------+
         |                  |                  |                  |                  |
    +---------+        +---------+        +---------+        +---------+        +---------+
    | pane 0  |        | pane 1  |        | pane 2  |        | pane 3  |        | pane 4  |
    | burgio  |        |  dave   |        |  clod   |        | chimaev |        |  genzi  |
    +---------+        +---------+        +---------+        +---------+        +---------+
         |                  |                  |                  |                  |
    +---------+        +---------+        +---------+        +---------+        +---------+
    | clg     |        | clg     |        | clg     |        | clg     |        | clg     |
    | MCP:    |        | MCP:    |        | MCP:    |        | MCP:    |        | MCP:    |
    | hh-     |        | hh-     |        | hh-     |        | hh-     |        | hh-     |
    | burgio  |        | dave    |        | clod    |        | chimaev |        | genzi   |
    +---------+        +---------+        +---------+        +---------+        +---------+
         |                  |                  |                  |                  |
    +---------+        +---------+        +---------+        +---------+        +---------+
    | Chrome  |        | Chrome  |        | Chrome  |        | Chrome  |        | Chrome  |
    | Prof 1  |        | Prof 2  |        | Prof 3  |        | Prof 5  |        | Prof 6  |
    | HH acc4 |        | HH acc? |        | HH acc? |        | HH acc? |        | HH acc? |
    +---------+        +---------+        +---------+        +---------+        +---------+
```

### Почему без оркестратора

1. **Инстансы независимы** - каждый аккаунт ищет свои similar вакансии
2. **Нет общего пула** - не нужно распределять задачи
3. **Ошибки редки** - сессия не протухает, капча пока не критична
4. **Простота** - меньше точек отказа, проще дебажить

### Когда понадобится оркестратор

- Общий пул вакансий (например, парсинг с hh.ru в БД, раздача воркерам)
- Сложная координация (лимиты, приоритеты, зависимости)
- Частые падения требуют авто-рестарт с логикой

---

## 2. Промпт для воркера

```markdown
# HH.ru Test Worker

Ты автономный воркер для откликов на вакансии HH.ru с тестами работодателей.

## Твой MCP сервер: {MCP_SERVER_NAME}
Используй ТОЛЬКО инструменты с префиксом `mcp__{MCP_SERVER_NAME}__*`

## Алгоритм работы

### Фаза 1: Найти вакансии с тестами

1. Открой https://hh.ru/applicant/resumes
2. Найди свое резюме и перейди в "Похожие вакансии"
3. Для каждой вакансии проверь наличие теста:
   - Ищи текст "Работодатель просит пройти тест"
   - Или кнопку "Пройти тест и откликнуться"

### Фаза 2: Обработка вакансии с тестом

1. Открой страницу отклика: `https://hh.ru/applicant/vacancy_response?vacancyId={ID}`
2. Прочитай описание вакансии (для сопроводительного письма)
3. Найди все вопросы теста:
   - Селектор контейнера: `[data-qa="task-body"]`
   - Текст вопроса: `[data-qa="task-question"]`
   - Варианты ответа: `[data-qa="cell"]`
   - Свободный ответ: `textarea[name^="task_"]`

### Фаза 3: Генерация ответов

Для каждого вопроса:
1. Проанализируй вопрос и варианты
2. Выбери наиболее подходящий ответ ИЛИ напиши свой
3. Учитывай контекст вакансии

### Фаза 4: Заполнение формы

1. Заполни ответы на тест
2. Раскрой сопроводительное письмо: `[data-qa="vacancy-response-letter-toggle"]`
3. Напиши краткое сопроводительное (2-3 предложения):
   - Почему подхожу
   - Релевантный опыт
   - Мотивация
4. Отправь: `[data-qa="vacancy-response-submit-popup"]`

### Фаза 5: Логирование

После каждого отклика записывай в лог:
- vacancy_id
- Название вакансии
- Компания
- Статус (success/error)
- Время

## Ограничения

- Максимум 200 откликов в день
- При ошибке - записать в лог и продолжить
- При капче - записать в лог и пропустить вакансию
- Не отвечай на вопросы без вариантов если не уверен

## Формат лога

Записывай в файл `~/hh-workers/logs/{WORKER_NAME}.log`:
```
[2025-01-29 12:34:56] [SUCCESS] vacancy_id=12345 company="Yandex" title="Python Developer"
[2025-01-29 12:35:23] [ERROR] vacancy_id=12346 error="captcha_detected"
```

## Команды

- Начать работу: сразу начинай обработку
- /stop - завершить после текущей вакансии
- /status - показать статистику сессии
```

---

## 3. Скрипт запуска 5 инстансов в tmux

```bash
#!/bin/bash
# ~/hh-workers/start-workers.sh

# Конфигурация воркеров
declare -A WORKERS=(
    ["burgio"]="hh-burgio"
    ["dave"]="hh-dave"
    ["clod"]="hh-clod"
    ["chimaev"]="hh-chimaev"
    ["genzi"]="hh-genzi"
)

SESSION="hh-workers"
LOGS_DIR="$HOME/hh-workers/logs"
PROMPTS_DIR="$HOME/hh-workers/prompts"

# Создать директории
mkdir -p "$LOGS_DIR" "$PROMPTS_DIR"

# Убить старую сессию если есть
tmux kill-session -t "$SESSION" 2>/dev/null

# Создать новую сессию с первым воркером
first_worker="${!WORKERS[@]}"
first_worker=$(echo "${!WORKERS[@]}" | cut -d' ' -f1)

tmux new-session -d -s "$SESSION" -n "workers"

# Создать панели для каждого воркера
pane_index=0
for worker_name in "${!WORKERS[@]}"; do
    mcp_server="${WORKERS[$worker_name]}"

    if [ $pane_index -gt 0 ]; then
        tmux split-window -t "$SESSION:workers" -h
        tmux select-layout -t "$SESSION:workers" tiled
    fi

    # Генерировать промпт для воркера
    cat > "$PROMPTS_DIR/$worker_name.md" << PROMPT_EOF
# HH.ru Test Worker: $worker_name

Ты автономный воркер для откликов на вакансии HH.ru с тестами.

## Твой MCP сервер: $mcp_server
Используй ТОЛЬКО инструменты с префиксом mcp__${mcp_server}__*

## Алгоритм работы

1. Открой https://hh.ru/applicant/resumes
2. Найди резюме и перейди в "Похожие вакансии"
3. Для каждой вакансии с тестом:
   - Открой страницу отклика
   - Прочитай вопросы теста
   - Сгенерируй ответы
   - Напиши сопроводительное (2-3 предложения)
   - Отправь отклик
4. Записывай результат в лог

## Лог файл: $LOGS_DIR/$worker_name.log

Формат:
[TIMESTAMP] [STATUS] vacancy_id=ID company="..." title="..."

## Начинай работу сейчас
PROMPT_EOF

    # Запустить Claude в этой панели
    tmux send-keys -t "$SESSION:workers.$pane_index" \
        "clg --mcp-server $mcp_server -p \"$(cat $PROMPTS_DIR/$worker_name.md)\" 2>&1 | tee -a $LOGS_DIR/$worker_name.log" \
        Enter

    ((pane_index++))
done

# Выровнять панели
tmux select-layout -t "$SESSION:workers" tiled

echo "Started $pane_index workers in tmux session '$SESSION'"
echo "Attach with: tmux attach -t $SESSION"
echo "Logs in: $LOGS_DIR"
```

### Управление tmux сессией

```bash
# Подключиться к сессии
tmux attach -t hh-workers

# Переключение между панелями
Ctrl+b + стрелки

# Остановить все воркеры
tmux kill-session -t hh-workers

# Посмотреть логи в реальном времени
tail -f ~/hh-workers/logs/*.log
```

---

## 4. Сравнение режимов запуска

| Критерий | Cron + oneshot | Daemon 24/7 | Docker + cron |
|----------|---------------|-------------|---------------|
| **Сложность** | Низкая | Средняя | Высокая |
| **Ресурсы** | Минимальные (только во время работы) | Постоянные | Изолированные |
| **Надежность** | Хорошая | Нужен supervisor | Отличная |
| **Мониторинг** | По логам | Нужен health check | Встроенный |
| **Изоляция** | Нет | Нет | Полная |
| **Перезапуск** | Автоматический (cron) | Нужен watchdog | docker restart policy |
| **GUI (Playwright)** | Нужен DISPLAY | Нужен DISPLAY | Нужен Xvfb или host DISPLAY |

### Рекомендация для локального desktop: **Cron + oneshot**

**Почему:**
- Запускается по расписанию, освобождает ресурсы между запусками
- Не требует настройки supervisor/watchdog
- Работает с GUI (твой DISPLAY)
- Простой мониторинг через логи

### Cron setup

```bash
# crontab -e

# Запуск каждые 4 часа (6 раз в день)
0 */4 * * * /home/flyingkuskus/hh-workers/start-workers.sh >> /home/flyingkuskus/hh-workers/cron.log 2>&1

# Или конкретные часы: 9:00, 13:00, 17:00, 21:00
0 9,13,17,21 * * * /home/flyingkuskus/hh-workers/start-workers.sh >> /home/flyingkuskus/hh-workers/cron.log 2>&1
```

### Daemon вариант (systemd user service)

```ini
# ~/.config/systemd/user/hh-workers.service
[Unit]
Description=HH.ru Test Workers
After=graphical-session.target

[Service]
Type=forking
Environment=DISPLAY=:0
ExecStart=/home/flyingkuskus/hh-workers/start-workers.sh
ExecStop=/usr/bin/tmux kill-session -t hh-workers
Restart=on-failure
RestartSec=300

[Install]
WantedBy=default.target
```

```bash
# Активировать
systemctl --user enable hh-workers
systemctl --user start hh-workers
```

### Docker вариант

Сложнее из-за необходимости GUI. Нужно:
1. Xvfb или проброс host DISPLAY
2. Chrome profiles внутри контейнера или volume mount
3. Отдельный контейнер для каждого воркера

Не рекомендую для desktop - overkill.

---

## 5. Структура файлов

```
~/hh-workers/
├── start-workers.sh          # Основной скрипт запуска
├── stop-workers.sh           # Остановка всех воркеров
├── status.sh                 # Статус и статистика
├── prompts/
│   ├── burgio.md
│   ├── dave.md
│   ├── clod.md
│   ├── chimaev.md
│   └── genzi.md
├── logs/
│   ├── burgio.log
│   ├── dave.log
│   ├── clod.log
│   ├── chimaev.log
│   ├── genzi.log
│   └── cron.log
└── config.json               # Опционально: маппинг профилей
```

---

## 6. Быстрый старт

```bash
# 1. Создать директорию
mkdir -p ~/hh-workers/{prompts,logs}

# 2. Скопировать скрипт
cp start-workers.sh ~/hh-workers/
chmod +x ~/hh-workers/start-workers.sh

# 3. Запустить
~/hh-workers/start-workers.sh

# 4. Подключиться
tmux attach -t hh-workers
```
