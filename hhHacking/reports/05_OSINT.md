# HH.RU OSINT & EXTERNAL EVIDENCE

## 1. GitHub: konard/hh-job-application-automation

**URL:** https://github.com/konard/hh-job-application-automation

### Network logs (issue-132/error-log.txt)
```
https://hh.ru/anatskytics?hhtmSource=vacancy_search_list...
https://mc.yandex.ru/watch/156828/1?page-url=...
https://mc.yandex.ru/watch/93250637/1?page-url=...
https://mc.yandex.ru/watch/83135743/1?page-url=...
https://cr-frontend.weborama-tech.ru/cr?...
https://us.ck-ie.com/hbrd678.gif?gdpr=...
```

**Подтверждает:** `/anatskytics`, 3 счётчика Яндекс Метрики, Weborama.

---

## 2. DuckDuckGo Tracker Radar

**URL:** https://github.com/duckduckgo/tracker-radar-wiki

### targetads.io на hh.ru
```json
{
  "fingerprinting": 2,
  "sites": ["hh.ru", "avito.ru", "tinkoff.ru", "cian.ru"]
}
```

**APIs:**
- Screen dimensions
- Navigator properties
- localStorage
- cookies

---

## 3. Habr: Group-IB Port Scanning

**URL:** https://habr.com/ru/articles/456558/ (2019)

### Ростелеком прецедент
Group-IB Secure Portal сканирует порты:
```
22, 445, 3389, 5938, 5650, 6900, 5900, 5985, 8080
```

HH использует тот же Group-IB (теперь F.A.C.C.T.).

---

## 4. AdGuard SpywareFilter

**URL:** https://github.com/AdguardTeam/AdguardFilters

### Правила для HH
```adblock
||hh.ru/shards/stat
||hh.ru/anatskytics?
||cpa.hh.ru/api/tracker/
i.hh.ru/mailing/$image
```

---

## 5. Chrome Extension

**URL:** https://dex.koi.security/reports/chrome/ammfijfhdajkoeoghjhfiadinnpmliag/2.0

"Gosuslugi and HH.RU Career Hacker: Advanced Tab Tracking Blocker"

Подтверждает: HH отслеживает переключение вкладок.

---

## 6. OpenAPI Specification

**Источник:** Официальная документация HH API (1.5MB)

### Подтверждённые схемы
```yaml
antifraud_verdict:
  - FRAUD_DETECTED
  - VERIFIED
  - UNKNOWN

resume_status:
  - blocked
  - on_moderation

is_primary_account_blocked: boolean
phone_temporarily_blocked: string
call_tracking_enabled: boolean
```

---

## 7. Correlation Table

| Наша находка | Внешнее подтверждение |
|--------------|----------------------|
| GIB fingerprinting | Habr Ростелеком |
| Localhost scanning | Habr + Oligo Security |
| `/anatskytics` | GitHub logs + AdGuard |
| TargetAds SDK | DuckDuckGo Tracker Radar |
| Yandex Metrika IDs | GitHub logs |
| `/shards/stat` | AdGuard rules |
| Antifraud system | OpenAPI specification |
