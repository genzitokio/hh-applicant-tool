# HH.RU SECURITY RESEARCH

**Дата:** 2026-02-04
**Метод:** Blackbox pentest + JS bundle deobfuscation

---

## REPORTS

| # | Файл | Содержание |
|---|------|------------|
| 1 | [01_FINGERPRINTING.md](reports/01_FINGERPRINTING.md) | GIB, DDos-Guard, port scanning, persistent storage |
| 2 | [02_TRACKING.md](reports/02_TRACKING.md) | 30+ IDs, Yandex Metrika, trackers, data sale |
| 3 | [03_ANTIFRAUD.md](reports/03_ANTIFRAUD.md) | SuspiciousState, blocking, moderation, trust score |
| 4 | [04_API.md](reports/04_API.md) | Auth, endpoints, Chatik API, rate limits |
| 5 | [05_OSINT.md](reports/05_OSINT.md) | External evidence, GitHub, Habr, AdGuard |
| 6 | [06_EMPLOYER_CABINET.md](reports/06_EMPLOYER_CABINET.md) | **NEW** AI Assistant, Auto-invite, Candidate scoring, Antifraud |

---

## QUICK FINDINGS

### CRITICAL
- **Localhost port scanning** — сканирует VNC/RDP/TeamViewer/AnyDesk порты
- **Продажа данных** — зарплата, пол, образование передаются в Yandex AdFox
- **Shadow ban** — статус SUSPICIOUS ограничивает функционал без уведомления
- **AI анализирует кандидатов** — AI Assistant scoring system для работодателей
- **EMPLOYER_SUSPICIOUS** — отдельная система подозрительности для работодателей

### HIGH
- **GIB перехватывает fetch/XHR** — все запросы проходят через их proxy
- **Persistent fingerprint** — выживает очистку cookies (IndexedDB)
- **Multi-account detection** — связывает аккаунты по fingerprint

### MEDIUM
- **43 A/B эксперимента** — пользователи как подопытные
- **3 счётчика Яндекс Метрики** — WebVisor записывает сессии
- **26+ third-party trackers** — данные утекают на 26 доменов

---

## DATA

```
data/
├── cookies.json          # GIB/DDG cookies
├── raw_dump.json         # Raw data dump
└── parsed.json           # Parsed data

js_analysis/
├── deobfuscated/         # Webcrack output (applicant)
├── all_endpoints.txt     # 163 API endpoints
├── bundles/              # Original JS bundles (applicant)
└── employer_bundles/     # Employer cabinet bundles + deobfuscated
    ├── deobfuscated/     # App, vendors, IndexPage-route, firebase
    ├── TargetAds_WebSDK.js
    ├── cpa_tracker_sdk.js
    └── remote_shared.js  # Federation + fingerprint
```

---

## KEY ENUMS

```javascript
// User status
SuspiciousState = NOT_SUSPICIOUS | SUSPICIOUS | BLOCKED

// Antifraud verdict
AntifraudVerdict = FRAUD_DETECTED | VERIFIED | UNKNOWN

// Block reasons
BlockReason = AD_IN_RESUME | FAKE_EXPERIENCE | TOO_MANY_NEGOTIATIONS
```

---

## KEY ENDPOINTS

### Applicant
```
/api/fl                    # Fingerprint logger
/anatskytics               # Internal analytics
/chatik/api/*              # Chat API
/me                        # User info
/resumes/mine              # My resumes
/vacancies/blacklisted     # Hidden vacancies
```

### Employer
```
/employer/vacancyresponses/ai-assistant  # AI scoring
/employer/automation                     # Auto-invite settings
/shards/employer/phishing_info          # Phishing protection
/shards/employer/overspending           # Overspending alerts
/employer/additional_check              # Additional verification
/employer/verification                  # Document verification
```

---

## PROTECTION

1. **uBlock Origin** + custom filters for hh.ru
2. **Firefox containers** — изоляция HH
3. **Disable JS** where possible
4. **Clear IndexedDB** — не только cookies!
5. **VPN/Tor** — смена IP
6. **Separate browser** — чистый профиль для HH
