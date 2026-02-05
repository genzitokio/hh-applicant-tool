#!/bin/bash
# HH.RU JS Bundles - Поиск по коду
# Использование: ./search.sh <pattern> [category]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

show_help() {
    echo -e "${GREEN}HH.RU JS Bundle Search${NC}"
    echo ""
    echo "Использование:"
    echo "  ./search.sh <pattern>              # Поиск везде"
    echo "  ./search.sh <pattern> <category>   # Поиск в категории"
    echo ""
    echo "Категории:"
    echo "  core      - Основные бандлы (vendors, App, appEntryPoint)"
    echo "  security  - GIB, fingerprint, antifraud"
    echo "  tracking  - Трекеры, аналитика"
    echo "  ui        - UI компоненты"
    echo "  resume    - Резюме и профиль"
    echo "  chunks    - Числовые чанки"
    echo ""
    echo "Примеры:"
    echo "  ./search.sh fingerprint"
    echo "  ./search.sh suspicious security"
    echo "  ./search.sh salary tracking"
    echo ""
    echo "Быстрые команды:"
    echo "  ./search.sh --fingerprint    # Все про fingerprinting"
    echo "  ./search.sh --tracking       # Все про трекинг"
    echo "  ./search.sh --antifraud      # Все про антифрод"
    echo "  ./search.sh --personal       # Персональные данные"
    echo "  ./search.sh --api            # API endpoints"
    echo "  ./search.sh --ports          # Порт-сканирование"
}

search_pattern() {
    local pattern="$1"
    local path="$2"

    echo -e "${YELLOW}=== Поиск: ${pattern} ===${NC}"
    echo ""

    rg -n -i --color=always "$pattern" "$path" 2>/dev/null | head -100

    local count=$(rg -c -i "$pattern" "$path" 2>/dev/null | awk -F: '{sum+=$2} END {print sum}')
    echo ""
    echo -e "${GREEN}Найдено совпадений: ${count:-0}${NC}"
}

case "$1" in
    -h|--help|"")
        show_help
        exit 0
        ;;
    --fingerprint)
        search_pattern "fingerprint|canvas|webgl|audio|devicePixelRatio" .
        ;;
    --tracking)
        search_pattern "sendBeacon|track|analytics|metrika|yandex|mail\.ru" .
        ;;
    --antifraud)
        search_pattern "suspicious|fraud|blocked|ban|antifraud|gib" .
        ;;
    --personal)
        search_pattern "salary|gender|education|collar|puid|predictedSalary" .
        ;;
    --api)
        search_pattern "/api/|/tracker/|/shards/|endpoint" .
        ;;
    --ports)
        search_pattern "127\.0\.0\.1|localhost.*:" .
        ;;
    --enums)
        search_pattern "enum|State\s*=|Verdict\s*=|Reason\s*=" .
        ;;
    *)
        pattern="$1"
        category="$2"

        case "$category" in
            core)
                path="_organized/01_core"
                ;;
            security)
                path="_organized/02_security"
                ;;
            tracking)
                path="_organized/03_tracking"
                ;;
            ui)
                path="_organized/04_ui_components"
                ;;
            resume)
                path="_organized/05_resume"
                ;;
            chunks)
                path="_organized/06_chunks"
                ;;
            *)
                path="."
                ;;
        esac

        search_pattern "$pattern" "$path"
        ;;
esac
