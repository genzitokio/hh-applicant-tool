#!/bin/bash
# Wrapper для claude-glm, вызываемый из Python
# Копирует логику из ~/.zshrc function claude-glm

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Загружаем .env если есть
if [[ -f "$SCRIPT_DIR/.env" ]]; then
    set -a
    source "$SCRIPT_DIR/.env"
    set +a
fi

# Если ключ в .env — используем его, иначе из окружения
export ANTHROPIC_API_KEY="${ANTHROPIC_GLM_API_KEY:-$ANTHROPIC_API_KEY}"
export ANTHROPIC_BASE_URL="https://api.z.ai/api/anthropic"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="glm-4.5-air"
export ANTHROPIC_DEFAULT_SONNET_MODEL="glm-4.7"
export ANTHROPIC_DEFAULT_OPUS_MODEL="glm-4.7"
export CLAUDE_CONFIG_DIR="$HOME/.claude-glm"

exec claude --dangerously-skip-permissions "$@"
