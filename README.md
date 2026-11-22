# 🤖 VORTEX-MD - WhatsApp Bot - 400+ Features (Gemini AI)

Assalam-o-Alaikum! Ye ek **complete WhatsApp bot** hai jis mein **400+ commands/features** hain. Sab code alag-alag folders mein hai — koi mix nahi.

Bot ka naam: **VORTEX-MD**

Ye bot **Baileys v7** (@whiskeysockets/baileys), **Gemini 2.5 Flash (free API)**, **Express server**, aur **JSON database** par chalta hai.

---

## 📁 Folder Structure (Alag-alag folders)

```
whatsapp-bot-400plus/
├── index.js                 # Main entry — Baileys connection, pairing, events
├── package.json             # Dependencies
├── Dockerfile               # Docker deploy ke liye
├── render.yaml              # Render.com deploy config
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore file
├── config/
│   └── settings.js          # Bot settings (name, owner, prefix, Gemini key, toggles)
├── lib/
│   ├── ai.js                # Gemini AI wrapper (askAI, summarize, translate, explainImage)
│   ├── database.js          # JSON file DB (users, groups, settings, bans, premium)
│   ├── downloader.js        # Video/audio downloader (TikTok, IG, FB, YT, etc.)
│   ├── menu.js              # Category-based menu builder
│   ├── myfunc.js            # Helpers (getText, getBuffer, fetchJson, etc.)
│   └── sticker.js           # Image/text to sticker converter
├── handler/
│   ├── handler.js           # Message handler (permissions, anti-spam, cooldowns)
│   └── loader.js            # Auto plugin loader (plugins/<category>/*.js)
├── server/
│   ├── server.js            # Express server (health, pairing, QR, stats)
│   └── public/
│       └── pairing.html     # Web pairing UI (enter number → get code → steps)
├── plugins/                 # ⭐ 400+ commands, har category alag folder mein
│   ├── admin/               # 40 admin commands
│   ├── ai/                  # 30 AI commands (Gemini)
│   ├── audio/               # 20 audio commands
│   ├── download/            # 40 download commands
│   ├── fun/                 # 56 fun commands
│   ├── games/               # 40 game commands
│   ├── group/               # 30 group commands
│   ├── media/               # 42 media commands
│   ├── misc/                # 30 misc commands
│   ├── owner/               # 20 owner commands
│   ├── search/              # 41 search commands
│   └── tools/               # 53 tool commands
├── auth/                    # Session storage (Baileys auth) — git ignore kiya gaya
├── data/
│   └── database.json        # JSON database — git ignore kiya gaya
└── dashboard/               # Future dashboard folder
```

---

## 🚀 Quick Start

### 1. Extract aur Install

ZIP extract karo phir terminal mein:

```bash
cd whatsapp-bot-400plus
npm install
```

### 2. Environment Setup

`.env.example` ko copy kar ke `.env` banao:

```bash
cp .env.example .env
```

Phir `.env` mein ye values bharo:

| Variable | Kya hai | Example |
|----------|---------|---------|
| `BOT_NAME` | Bot ka naam | MyBot MD |
| `OWNER_NUMBER` | Tumhara WhatsApp number (country code ke saath) | 923001234567 |
| `PHONE_NUMBER` | Bot ka WhatsApp number (jis par bot chale) | 923001234567 |
| `GEMINI_API_KEY` | Gemini free API key (aistudio.google.com) | AIza... |
| `PREFIX` | Command prefix | . |

🔑 **Gemini Free API Key:** [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) se free key lo (credit card nahi chahiye).

### 3. Bot Run Karo

```bash
node index.js
```

Pehli baar run karne par terminal mein **pairing code** ayega usay WhatsApp mein enter karo:
- WhatsApp open karo → Settings → Linked Devices → **Link a device** → **Link with phone number** → pairing code enter karo.

Ya phir web pairing page use karo (server start hone ke baad): `http://localhost:3000`

---

## 🔗 Pairing System (Complete Hisaab)

Bot mein **do tareeqe** se pairing hoti hai:

### Tareeqa 1: Terminal Pairing (index.js)
Jab `node index.js` chaltay hain aur bot registered nahi hota, to terminal mein ye sawal aata hai:

```
📱 Bot ke liye phone number dalo (country code + number, e.g. 923001234567): 
```

Number dene ke baad bot `sock.requestPairingCode(phone)` call karta hai jo ek **8-digit pairing code** generate karta hai. Usay WhatsApp app mein:
- Settings → Linked Devices → Link a device → **Link with phone number**
- Code enter karo → bot connect ho jayega.

Pairing code terminal mein bhi print hota hai:
```
╔═════════════════════════════╗
║  PAIRING CODE: 123-456  ║
╚═════════════════════════════╝
```

### Tareeqa 2: Web Pairing Page (Express Server)
Server start hone ke baad ye page chalta hai: `http://localhost:3000`

**Pairing.html page mein:**
1. Apna WhatsApp number enter karo (country code ke saath)
2. "Get Pairing Code" button dabao
3. Server se 8-digit code aayega
4. WhatsApp app mein Settings → Linked Devices → Link with phone number → code enter karo

**API Endpoints (server/server.js):**
| Endpoint | Method | Kaam |
|----------|--------|------|
| `/health` | GET | Bot online check |
| `/api/pairing-code?phone=92300...` | GET | Pairing code generate karo |
| `/api/qr` | GET | QR code milo (agar available ho) |
| `/api/stats` | GET | Bot stats (users, groups, commands) |
| `/api/commands` | GET | Sare commands ki list |

### Pairing Kaise Kaam Karta Hai (Baileys Flow)
1. `useMultiFileAuthState('./auth')` — session files save karta hai `auth/` folder mein
2. `makeWASocket(...)` — Baileys socket create karta hai
3. `sock.requestPairingCode(number)` — WhatsApp se pairing code maangta hai
4. User WhatsApp app mein code enter karta hai → device link ho jati hai
5. Session `auth/` folder mein save rehti hai, agli baar dobara pairing ki zaroorat nahi

⚠️ **Note:** Agar `auth/` folder delete kar dio gi to dobara pairing karni paregi.

---

## 🤖 Gemini AI (Free)

Bot mein **Google Gemini 2.5 Flash** (free tier) integrate hai via `@google/genai` SDK.

**AI Commands (plugins/ai/):**
- `.ai <sawal>` — Koi bhi sawal poocho
- `.ask <sawal>` — AI se sawal poocho
- `.summarize <text>` — Lambi text ka summary nikalo
- `.translate <text>` — Text translate karo
- `.explainimage` (reply image par) — Image samjho (Gemini vision)

**AI kaise set karein:**
1. [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) se free key lo
2. `.env` mein `GEMINI_API_KEY=AIza...` daalo
3. Bot restart karo

Free tier mein rozana kuch requests free hain (Google ki limits ke mutabiq).

---

## 📋 Commands (400+)

Sare commands `plugins/<category>/` folders mein hain. Har category ek alag folder:

| Category | Count | Kya hai |
|----------|-------|---------|
| admin | 40 | Admin commands (kick, ban, promote, demote, mute, etc.) |
| ai | 30 | Gemini AI commands |
| audio | 20 | Audio commands |
| download | 40 | Video/audio downloader (TikTok, IG, FB, YT, Pinterest) |
| fun | 56 | Fun commands (dare, flirt, roast, meme, shayari, etc.) |
| games | 40 | Game commands |
| group | 30 | Group management |
| media | 42 | Media commands (sticker, etc.) |
| misc | 30 | Miscellaneous |
| owner | 21 | Owner-only commands |
| search | 41 | Search commands |
| tools | 53 | Utility tools |

Menu dekhne ke liye bot ko message bhejo: `.menu` ya `.help`

---

## 🛡️ Features

- ✅ 400+ commands (12 categories)
- ✅ Gemini AI (free)
- ✅ Auto plugin loader (har command alag file)
- ✅ Terminal pairing + Web pairing page
- ✅ QR code support
- ✅ Anti-spam, anti-link, anti-badword, anti-call
- ✅ Welcome & goodbye messages
- ✅ Cooldowns aur rate limiting
- ✅ User ban / premium system
- ✅ JSON database (koi external DB ki zaroorat nahi)
- ✅ Express server + API endpoints
- ✅ Health check endpoint
- ✅ Docker support
- ✅ Render deploy config
- ✅ Roman Urdu + English support
- ✅ Owner commands (setprofile, broadcast, etc.)
- ✅ Group commands (add, kick, promote, demote, mute, etc.)
- ✅ Pinterest image downloader (`.pinterest <pin link>`)
- ✅ Set bot profile picture with text overlay (`.setprofile` — sirf owner)

---

## 🌐 Hosting Guidance

### ⚠️ Vercel ke baare mein zaroori baat
Tumhare paas **Vercel** hai, lekin **Vercel serverless hai** — ye 24/7 bot run nahi kar sakta kyunke:
- Vercel functions timeout ho jate hain (max 15-60 seconds)
- Koi persistent process nahi rehta
- WhatsApp session rehne ke liye bot ko hamesha online rehna zaroori hai

**Vercel sirf pairing page / dashboard ke liye use kar sakte ho** (static HTML), bot ke liye nahi.

### ✅ Bot ke liye behtar options (Free)

| Platform | Free Plan | Suitable for |
|----------|-----------|--------------|
| **Oracle Cloud Free Tier** | Always-free ARM instance | ✅ Best — 24/7 bot run ho sakta hai |
| **Render** | Free web service (spins down after inactivity) | Bot + dashboard dono, lekin sleep hota hai |
| **Railway** | Trial credit | Accha lekin free credit limited hai |
| **Koyeb** | Free tier | Accha option hai |
| **Google Colab** | Temporary | Sirf testing ke liye |

**Mera mashwara:** Oracle Cloud free tier lo (hamesha free, 24/7 chalta hai), ya Render ka free plan use karo + Uptime Kuma se ping karte raho taake sleep na ho.

### GitHub Upload
Ye ZIP tum khud GitHub mein upload kar sakte ho:
1. GitHub par nayi repository banao (private ya public)
2. ZIP extract karo, saara code wahan upload karo
3. `.env` file **GitHub par na upload karo** (ye `.gitignore` mein hai)

---

## 📞 Support

Agar koi error aaye ya setup mein madad chahiye ho to batana. Sab commands alag-alag folders mein hain, asani se edit kar sakte ho.

---

**Bot ready hai — GitHub par upload karo aur chalao! 🚀**
