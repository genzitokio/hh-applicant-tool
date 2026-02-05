# HH.RU JS Bundles - Индекс

**Всего бандлов:** 37
**Дата выгрузки:** 2026-02-04
**Источник:** https://hh.ru, https://i.hh.ru, https://resume-profile-front.hh.ru

---

## Структура

```
_organized/
├── 01_core/          # Основные бандлы приложения
├── 02_security/      # GIB, fingerprinting, antifraud
├── 03_tracking/      # Трекеры, аналитика, реклама
├── 04_ui_components/ # UI библиотеки (Bloko, Magritte)
├── 05_resume/        # Профиль, резюме, карьера
├── 06_chunks/        # Числовые чанки (lazy-load)
└── 07_misc/          # Остальное
```

---

## 01_core/ - Основные бандлы

| Бандл | Размер | Описание |
|-------|--------|----------|
| `vendors.9d5ab1171665c64a` | 4.1M | Все vendor библиотеки (React, lodash, axios и т.д.) |
| `App.412d0ea19b7f82b1` | 2.2M | Главный бандл приложения, роутинг, страницы |
| `appEntryPoint.8a0ce2da87c1d3ac` | 76K | **ВАЖНО!** Точка входа, инициализация трекеров, `sendFingerprint()` |
| `runtime.9db6cd0f89c6941d` | 244K | Webpack runtime, загрузка чанков |

### Ключевые места в 01_core:
- `appEntryPoint` → `sendFingerprint()` (строка ~430)
- `vendors` → enum'ы `SuspiciousState`, `AntifraudVerdict`, `BlockReason`
- `App` → роуты, страницы, API вызовы

---

## 02_security/ - Безопасность и антифрод

| Бандл | Размер | Описание |
|-------|--------|----------|
| `650.696cd6ab57025f1a` | 280K | **GIB (F.A.C.C.T.)** - fingerprinting, `setIdentity`, `setUserId`, `gibEncrypt` |
| `__federation_expose_security.*` | ~50K | Security модули, порт-сканирование localhost |

### Ключевые места в 02_security:
- `650.*` → GIB init, `/api/fl` endpoint, fingerprint collection
- Port scanning: 127.0.0.1:5900-6900 (VNC), :3389 (RDP), :5938 (TeamViewer)

---

## 03_tracking/ - Трекинг и аналитика

| Бандл | Размер | Описание |
|-------|--------|----------|
| `sdk` | 5K | **iapSDK** - CPA трекер (cpa.hh.ru), конверсии, заказы |
| `TargetAds_WebSDK` | 15K | Рекламный SDK, `predictedSalary`, puids для Adfox |
| `smart-script` | 8K | Smart-баннеры |
| `firebase.2ece51dadda079d5` | 120K | Firebase/Analytics |
| `2305.59c00a9449ffb002` | 5K | `SendAnalyticsEvent` компонент |

### Ключевые места в 03_tracking:
- `sdk` → `/tracker/hit`, `/tracker/event`, `/tracker/conversion`
- `TargetAds_WebSDK` → `puid55` (зарплата), `puid37` (пол), `collar` (воротничок)

---

## 04_ui_components/ - UI компоненты

| Бандл | Размер | Описание |
|-------|--------|----------|
| `bloko.ba4289b31bf0da83` | 864K | Bloko UI kit (старый) |
| `magritte.6ef9cf70f29e47ee` | 3.8M | Magritte UI kit (новый) |
| `fallbackBlokoIcon.*` | 20K | Fallback иконки |
| `ProxyExternalService-route.*` | 19K | Layout система, SEO meta |

---

## 05_resume/ - Резюме и профиль

| Бандл | Размер | Описание |
|-------|--------|----------|
| `ApplicantResumes-route.*` | 150K | Страница резюме соискателя |
| `remote.resume_profile_front.*` | 100K | Микрофронт профиля |
| `notSharedVendors.*` | 200K | Vendor'ы для резюме |
| `remote.career_platform_front.*` | 80K | Карьерная платформа |
| `7097.*`, `8490.*`, `4323.*` | ~100K | Чанки для резюме |

---

## 06_chunks/ - Числовые чанки

| Бандл | Описание |
|-------|----------|
| `262.*` | Lazy-loaded модуль |
| `443.*` | Lazy-loaded модуль |
| `3560.*` | Lazy-loaded модуль |
| `3718.*` | Lazy-loaded модуль |
| `4823.*` | Lazy-loaded модуль |
| `5834.*` | Lazy-loaded модуль |
| `6578.*` | Lazy-loaded модуль |
| `7877.*` | Lazy-loaded модуль |
| `9216.*` | Lazy-loaded модуль |
| `9795.*` | Lazy-loaded модуль |

---

## 07_misc/ - Разное

| Бандл | Описание |
|-------|----------|
| `remote.xhhshared.*` | Shared модули |
| `fallbackSharedVendors.*` | Fallback vendors |
| `chatik` | Чатик (если есть) |

---

## Быстрый поиск

### По ключевым словам (грепать):

```bash
# Fingerprinting
rg -i "fingerprint|canvas|webgl|audio" .

# Трекинг
rg -i "sendBeacon|track|analytics|metrika" .

# Антифрод
rg -i "suspicious|fraud|blocked|ban" .

# Персональные данные
rg -i "salary|gender|education|collar" .

# Cookies/Storage
rg -i "cookie|localStorage|indexedDB|fpid" .

# API endpoints
rg -i "/api/|/tracker/|/shards/" .

# Порт-сканирование
rg "127\.0\.0\.1" .
```

### Интересные enum'ы:

```bash
# Статусы пользователя
rg "SuspiciousState|AntifraudVerdict|BlockReason" .

# Типы событий
rg "ADD_TO_CART|CONFIRM_ATTRIBUTION" .

# Блокировки
rg "DUPLICATE.*BLOCKED|BLACKLISTED" .
```

---

## Файлы по важности

### MUST READ (обязательно):
1. `appEntryPoint.*/deobfuscated.js` - точка входа, инициализация всего
2. `650.*/deobfuscated.js` - GIB fingerprinting
3. `vendors.*/deobfuscated.js` - enum'ы и типы
4. `sdk/deobfuscated.js` - CPA трекер
5. `TargetAds_WebSDK/deobfuscated.js` - рекламный SDK

### SHOULD READ (желательно):
- `App.*/deobfuscated.js` - роуты и API
- `__federation_expose_security.*/deobfuscated.js` - порт-сканирование

### OPTIONAL (опционально):
- UI компоненты (bloko, magritte) - не содержат трекинга
- Числовые чанки - lazy-load модули

---

## Известные находки

| Что | Где | Строка |
|-----|-----|--------|
| `sendFingerprint()` | appEntryPoint.*/deobfuscated.js | ~430 |
| GIB init | 650.*/deobfuscated.js | ~8842 |
| Port scanning | __federation_expose_security.* | - |
| `SuspiciousState` enum | vendors.*/deobfuscated.js | ~108000 |
| `AntifraudVerdict` enum | vendors.*/deobfuscated.js | ~108000 |
| `EMPLOYER_DUPLICATE_AUTO_BLOCKED` | vendors.*/deobfuscated.js | ~108264 |
| iapSDK tracker | sdk/deobfuscated.js | все |
| `predictedSalary` → puid55 | TargetAds_WebSDK/* | - |

---

## JShunter Scan Results (2026-02-04)

### Статистика
- **Всего endpoints:** 163
- **Internal API (/shards/):** 27
- **Admin endpoints:** 8
- **External URLs:** 30+

### Критические находки

| Находка | Файл | Описание |
|---------|------|----------|
| **GIB Fingerprinting** | `650.*/deobfuscated.js` | `/api/fl`, `//ru.id.facct.ru/id.html` |
| **Port Scanning** | `650.*/deobfuscated.js` | `//127.0.0.1:` - проверка localhost портов |
| **Admin Panel** | `443.*/deobfuscated.js` | `/admin/courses`, `/admin/streams`, `/admin/educations` |
| **Yandex API Key** | `8490.*/deobfuscated.js`, `App.*/deobfuscated.js` | `https://api-maps.yandex.ru/v3/?apikey=$` |

### Интересные endpoints по категориям

#### Аутентификация
```
/account/login
/account/signup
/account/captcha
/account/force_logout
/auth/login
/auth/logout
```

#### Удаление аккаунта
```
/account/delete_me
/account/delete_me/affirmation
/account/delete_me/confirmation
/account/delete_me/gratitude
```

#### Телефонная верификация
```
/account/phone_verification
/applicant/phone_verification
/shards/otp_generate
/shards/phone/set_verified_phone
/shards/phone/set_verified_phone_to_resumes
```

#### Internal /shards/ API (27 endpoints)
```
/shards/stat
/shards/hhpro_ai_generate
/shards/hhpro_ai_check_status
/shards/professional_role
/shards/roles_catalog
/shards/industry
/shards/popular_areas
/shards/get_area_districts
/shards/autoresponse
/shards/autoresponse/statistics
/shards/add_skill_to_resume
/shards/applicant/resumes
/shards/resume/edit/visibility
/shards/employer/divisions
/shards/employer/create_cart
/shards/employer/clickme_auto_campaign/update_cart_with_clickme_auto_campaign_draft
/shards/employerview/employer_vacancy_search
/shards/price/cart/get_items
/shards/price/cart/item
/shards/price/cart/item_list
/shards/price/cart/items
/shards/price/cart/purchase
```

#### Admin Panel
```
/admin/courses
/admin/courses/create
/admin/courses/:id/edit
/admin/educations
/admin/education/create
/admin/streams
/admin/streams/create
/admin/streams/:id/edit
```

#### Резюме и профиль
```
/applicant/resume
/applicant/resume/edit
/applicant/resumes
/applicant/resumes/new
/applicant/resumes/clone
/applicant/resumes/touch
/applicant/deleteresume
/applicant/my_resumes
/applicant/resumelist
/profile/me
/profile/edit/*
/profile/resume/*
/profile/onboarding/*
```

### Внешние сервисы

| Сервис | URL |
|--------|-----|
| **Yandex Maps** | `https://api-maps.yandex.ru/v3/?apikey=$` |
| **Yandex Ads** | `https://yandex.ru/ads/system/context.js`, `header-bidding.js` |
| **GIB F.A.C.C.T.** | `//ru.id.facct.ru/id.html` |
| **Telegram** | `https://telegram.me/hh_applicant_bot`, `hh_ru_bot`, `reg_hh_bot` |
| **WhatsApp** | `https://wa.me/$` |
| **ClickMe** | `https://clickme.hh.ru/new/dashboard` |
| **Career HH** | `https://career.hh.ru/assessment` |

### Файлы результатов

- `all_endpoints.txt` - все 163 endpoint'а
- `full_scan_results.txt` - полный вывод JShunter с файлами
- `results_gib.json` - GIB-related находки
- `results_vendors.json` - vendors находки (JWT false positives)

---

## Утилиты

См. файл `search.sh` для быстрого поиска по бандлам.
