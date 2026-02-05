# HH.RU FINGERPRINTING & ANTIBOT

## 1. GIB (Group-IB / F.A.C.C.T.)

### Cookies
| Cookie | Описание |
|--------|----------|
| `gsscgib-w-hh` | Session fingerprint (зашифрованный) |
| `cfidsgib-w-hh` | Client fingerprint ID |
| `fgsscgib-w-hh` | Fast session hash |
| `__zzatgib-w-hh` | Antibot token (base64) |

### window.gib API
```javascript
gib.getCID()         // → "gib-w-hh"
gib.getCFIDS()       // → encrypted fingerprint
gib.getOTTHeaders()  // → X-GIB-* headers
gib.gibEncrypt(data) // шифрование
gib.gibHash(data)    // хэширование
gib.setLogin(login)  // связь fingerprint↔login
gib.setIdentity(id)  // установка identity
```

### HTTP Headers (добавляются ко ВСЕМ запросам)
```
X-GIB-GSSCgib-w-hh: <session_fingerprint>
X-GIB-FGSSCgib-w-hh: <fast_token>
```

### Endpoint
```
/api/fl?u=UUID&cfidsgib-w-hh=ENCRYPTED_FINGERPRINT
→ POST на ru.id.facct.ru/id.html
```

---

## 2. LOCALHOST PORT SCANNING

HH сканирует порты 127.0.0.1 для детекции remote access:

| Порт | Сервис | Цель |
|------|--------|------|
| 5900-5902, 6900 | VNC | Remote desktop |
| 5800-5801 | VNC HTTP | |
| 3389 | RDP | Windows |
| 5938-5939, 5931 | TeamViewer | |
| 5650, 6568 | AnyDesk | |
| 7070 | RustDesk | |
| 445 | SMB | Windows shares |
| 5985 | WinRM | |
| 8080 | Proxy | Dev servers |

**Цель:** Детекция ботов/мошенников под удалённым управлением.

---

## 3. DDos-Guard

| Cookie | Описание |
|--------|----------|
| `__ddg1_` | Device ID (HttpOnly) |
| `__ddg8_` | Fingerprint hash |
| `__ddg9_` | **IP адрес напрямую** |
| `__ddg10_` | Timestamp |

---

## 4. Persistent Storage

### IndexedDB (выживает очистку cookies!)
```javascript
rb_sync_id.fpid = "VVm_Ran1VQ4Yx-moxsczs"  // fingerprint
rb_sync_id.time = 1770140399569             // timestamp
```

### localStorage
```javascript
_tads12775_cid = "5684026370940425426"  // TargetAds client ID
_tads_uid = "03AC0B734F..." // = crypted_hhuid!
```

---

## 5. Fetch/XHR Interception

GIB перехватывает ВСЕ сетевые запросы:
```javascript
fetchOverridden: "modified"  // НЕ native!
xhrOverridden: "modified"    // НЕ native!
```

Каждый запрос проходит через GIB-прокси с добавлением fingerprint headers.
