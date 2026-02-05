# HH.RU API REFERENCE

## 1. Authentication

### Required Cookies
```
hhtoken=Xmm9GXm3GaAsW1lpwSesQ1wyhMtZ   # Session
hhuid=7fxjb_tth3PJ6GmCMwxDmg--          # User ID
_xsrf=d2b0edea3fc95ae6709f0bc6eb2962cc  # CSRF
hhrole=applicant                         # Role
```

### Required Headers
```http
x-xsrftoken: <_xsrf cookie>
x-hhtmsource: app
x-requested-with: XMLHttpRequest
accept: application/json
```

### GIB Headers (dynamic)
```http
X-GIB-GSSCgib-w-hh: <session>
X-GIB-FGSSCgib-w-hh: <fast_token>
```

---

## 2. Main Endpoints

### User
```
GET  /me                    # Current user info
POST /me                    # Edit user info
GET  /resumes/mine          # My resumes
GET  /negotiations          # My responses
```

### Vacancies
```
GET  /vacancies             # Search vacancies
GET  /vacancies/{id}        # Vacancy details
GET  /vacancies/blacklisted # Hidden vacancies
PUT  /vacancies/blacklisted/{id}
```

### Employers
```
GET  /employers/{id}        # Employer info
GET  /employers/blacklisted # Hidden employers
```

### Resume
```
POST /resumes               # Create resume
GET  /resumes/{id}          # Get resume
PUT  /resumes/{id}          # Update resume
GET  /resumes/{id}/access   # Visibility settings
```

### Dictionaries
```
GET  /dictionaries          # All dictionaries
GET  /areas                 # Regions
GET  /professional_roles    # Roles
GET  /skills                # Skills
```

---

## 3. Chatik API (WebSocket)

**Base:** `https://chatik.hh.ru/chatik/api/`

### Endpoints
```
GET  /chats                  # List chats
GET  /chat_data?chatId=X     # Chat data
POST /send                   # Send message
POST /mark_read              # Mark as read
GET  /unread                 # Unread count
POST /participant_action     # Typing/read status
GET  /quick_replies          # Quick replies
POST /check_link             # Phishing check
GET  /get_link_preview       # Link preview (SSRF!)
POST /upload_file            # File upload
GET  /search                 # Search messages
```

### Bug: applicantId не валидируется
```
GET /chat_data?chatId=X&applicantId=ЛЮБОЕ_ЧИСЛО
```
Возвращает данные по сессии, игнорируя applicantId.

---

## 4. Internal Tracking

```
/anatskytics?hhtmSource=X&hhtmFrom=Y
/shards/stat
/api/fl?u=UUID&cfidsgib-w-hh=FP
/api/analytics/*
```

---

## 5. OAuth

```
POST /oauth/token
```

---

## 6. Phone Verification

```
POST /resume_phone_generate_code  # Send OTP
POST /resume_phone_confirm        # Verify OTP
```

---

## 7. Salary Statistics

```
GET /salary_statistics/dictionaries/employee_levels
GET /salary_statistics/dictionaries/salary_areas
GET /salary_statistics/dictionaries/professional_areas
```

---

## 8. Rate Limits

- Резюме: max 10 штук
- Blacklist: max 2000 компаний
- Отклики: лимит зависит от trust score
- Сообщения: лимит при Suspicious статусе
