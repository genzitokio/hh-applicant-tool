#!/bin/bash
# Установка AutoKus cron jobs

set -e

echo "Устанавливаю AutoKus cron..."

# Копируем cron
sudo cp /home/flyingkuskus/AutoKus/autokus-cron /etc/cron.d/autokus
sudo chmod 644 /etc/cron.d/autokus

# Проверяем
echo "Установлено:"
cat /etc/cron.d/autokus

echo ""
echo "Готово. Расписание:"
echo "  - Каждый час 9:00-21:00 — проверка сообщений"
echo "  - 21:00 — дневной отчёт"
echo ""
echo "Логи: /home/flyingkuskus/AutoKus/logs/"
