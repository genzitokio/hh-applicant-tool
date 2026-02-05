# HH.RU TRACKING & DATA COLLECTION

## 1. User IDs (30+ идентификаторов)

### HH Internal
| ID | Пример | Описание |
|----|--------|----------|
| `hhuid` | `7fxjb_tth3PJ6GmCMwxDmg--` | Основной ID |
| `crypted_hhuid` | `03AC0B734F...` | AES-256 зашифрованный |
| `crypted_id` | `2E8298365F...` | User ID encrypted |
| `_hi` | `186642926` | Internal ID |
| `hhrole` | `applicant` | Роль |
| `domain_sid` | `VVm_Ran1VQ4Yx:1770140399569` | Session |

### Yandex Metrika (3 счётчика!)
- `yaCounter156828` — основной
- `yaCounter93250637`
- `yaCounter83135743`

**WebVisor включён** — запись сессий пользователей.

| Cookie | Описание |
|--------|----------|
| `_ym_uid` | User ID |
| `_ym_visorc` | WebVisor flag |
| `_ym_isad` | AdBlock detection |

### Mail.ru / VK
| Cookie | Описание |
|--------|----------|
| `tmr_lvid` | Top.Mail.ru visitor ID |
| `VK-RTRG-318408-3u7id` | VK Retargeting |

### TargetAds
| Key | Описание |
|-----|----------|
| `_tads12775_cid` | Client ID |
| `_tads12775_sid` | Session ID |
| `_tads_uid` | = crypted_hhuid (связка!) |

---

## 2. Внутренние Tracking Endpoints

```
/anatskytics?hhtmSource=...&hhtmFrom=...  # Internal analytics
/shards/stat                               # Statistics
/api/analytics/*                           # Events
cpa.hh.ru/api/tracker/                     # CPA tracking
```

---

## 3. Third-Party Trackers (26+ доменов)

| Трекер | Домен |
|--------|-------|
| Yandex Metrika | mc.yandex.ru |
| Yandex AdFox | yandex.ru/ads/adfox |
| TargetAds | eye.targetads.io |
| Weborama | cr-frontend.weborama-tech.ru |
| Mail.ru | top-fwz1.mail.ru |
| VK | vk.com/rtrg |
| CK-IE | us.ck-ie.com |
| HH Ads | adsrv.hh.ru |

---

## 4. ПРОДАЖА ДАННЫХ YANDEX ADFOX

Каждый рекламный запрос содержит профиль:

```
puid37=MALE              # Пол
puid44=higher            # Образование
puid46=96:104            # Профессиональные роли
puid55=250000-300000     # ДИАПАЗОН ЗАРПЛАТЫ!
puid51=full_day          # График
puid52=full              # Занятость
puid2=7fxjb_...          # HH User ID
puid10=43 A/B exp        # 43 активных эксперимента
```

**predictedSalary** вычисляется ML и передаётся рекламодателям!

---

## 5. A/B Эксперименты

43 активных эксперимента над пользователями:
```javascript
exp_chat_postponed_view
exp_search_ai_suggest
exp_negotiations_ai_answer
exp_resume_builder_ai_*
// ... и ещё 39
```

---

## 6. localStorage Tracking

```javascript
hh-lux-state = {...}           // UX metrics
HH-Last-Suggest-Shown          // UI state
hh:bannerHistory               // Banner tracking
hh:resumeRecommendations       // Recommendations
lastRequestUrl                 // Navigation tracking
_tracking_notification_list    // Notification state
```
