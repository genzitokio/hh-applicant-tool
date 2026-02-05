# HH.RU ANTIFRAUD & MODERATION

## 1. SuspiciousState — Статусы пользователей

```javascript
enum SuspiciousState {
  NotSuspicious = "NOT_SUSPICIOUS",              // Нормальный
  Suspicious = "SUSPICIOUS",                      // Под подозрением
  TrustedSuspicious = "TRUSTED_SUSPICIOUS",      // Доверенный подозрительный
  SuspiciousRemovalPending = "SUSPICIOUS_REMOVAL_PENDING",
  Blocked = "BLOCKED"                             // Заблокирован
}
```

**Suspicious** = ограничения на функционал без уведомления!

---

## 2. AntifraudVerdict — Вердикты

```javascript
enum AntifraudVerdict {
  FraudDetected = "FRAUD_DETECTED",
  Unknown = "UNKNOWN",
  Verified = "VERIFIED",
  FailedToVerify = "FAILED_TO_VERIFY",
  EvaluationWasNotRequested = "EVALUATION_WAS_NOT_REQUESTED"
}
```

---

## 3. BlockReason — Причины блокировки

```javascript
enum BlockReason {
  AdInNegotiation = "AD_IN_NEGOTIATION",      // Реклама в переписке
  AdInResume = "AD_IN_RESUME",                 // Реклама в резюме
  TooManyNegotiations = "TOO_MANY_NEGOTIATIONS",
  NoSenseNegotiation = "NO_SENSE_NEGOTIATION", // Бессмысленные отклики
  FakeExperience = "FAKE_EXPERIENCE",          // Фейковый опыт
  Other = "OTHER"
}
```

---

## 4. Salary Triggers

```javascript
SalaryTooLow = "SALARY_TOO_LOW"    // Слишком низкая ЗП
SalaryTooHigh = "SALARY_TOO_HIGH"  // Слишком высокая ЗП
```

ML модель определяет "нормальный" диапазон ЗП для профессии.

---

## 5. Resume Status

```yaml
resume_status:
  - not_published   # Не опубликовано
  - published       # Опубликовано
  - blocked         # ЗАБЛОКИРОВАНО
  - on_moderation   # На модерации
```

---

## 6. Moderation Notes

```yaml
moderation_note:
  - bad               # Резюме составлено небрежно
  - block_full_name   # Проблема с ФИО
  - ... и другие
```

---

## 7. Account/Phone Blocking

```yaml
is_primary_account_blocked: boolean  # Аккаунт заблокирован
phone_temporarily_blocked            # Телефон временно заблокирован
```

---

## 8. Blacklist System

### API Endpoints
```
GET/PUT/DELETE /vacancies/blacklisted/{id}   # Скрытые вакансии
GET/PUT/DELETE /employers/blacklisted/{id}   # Скрытые работодатели
GET/POST/DELETE /resumes/{id}/blacklist      # Blacklist резюме
GET/POST/DELETE /resumes/{id}/whitelist      # Whitelist резюме
```

**Лимит:** до 2000 компаний в списке видимости.

---

## 9. Multi-Account Detection

### Триггеры детекции
- Совпадение `hhuid` / `crypted_hhuid`
- Совпадение fingerprint (`cfidsgib-w-hh`)
- IndexedDB persistent ID (`rb_sync_id.fpid`)
- Совпадение IP + User-Agent
- Связанные email/телефоны

### Последствия
```javascript
// Shadow ban без уведомления:
- Отклики не доходят
- Резюме не видно в поиске
- Ограничения на сообщения
```

---

## 10. Trust Score System

```javascript
// Скрытый trust score влияет на:
- Видимость резюме
- Приоритет в поиске
- Возможность откликаться
- Лимиты сообщений
```

Factors:
- Возраст аккаунта
- Верификация телефона/email
- История блокировок
- Качество резюме
- Antifraud verdict
