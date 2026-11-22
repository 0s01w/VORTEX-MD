// ============================================
// MAIN ENTRY - Bot yahan se start hota hai
// ============================================
require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, Browsers } = require('@whiskeysockets/baileys');
const pino = require('pino');
const qrcode = require('qrcode-terminal');
const readline = require('readline');

const settings = require('./config/settings');
const db = require('./lib/database');
const loader = require('./handler/loader');
const handler = require('./handler/handler');
const server = require('./server/server');

db.load();
loader.loadPlugins();
server.startServer();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(q) { return new Promise(r => rl.question(q, r)); }

let sock = null;
let reconnectAttempts = 0;

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth');
  const { version } = await fetchLatestBaileysVersion();

  sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: 'silent' }),
    browser: Browsers.ubuntu(settings.botName),
    printQRInTerminal: false,
    markOnlineOnConnect: true,
  });

  server.setSocket(sock);

  // Pairing code (terminal se)
  if (!sock.authState.creds.registered) {
    let phone = settings.phoneNumber;
    if (!phone) {
      phone = await ask('📱 Bot ke liye phone number dalo (country code + number, e.g. 923001234567): ');
      phone = phone.replace(/[^0-9]/g, '');
    }
    if (phone) {
      console.log('🔑 Pairing code ban raha hai...');
      try {
        const code = await sock.requestPairingCode(phone);
        server.setPairingCode(code);
        console.log('\n╔══════════════════════════════╗');
        console.log(`║  PAIRING CODE: ${code}  ║`);
        console.log('╚══════════════════════════════╝');
        console.log('WhatsApp → Settings → Linked Devices → Link with phone number\n');
      } catch (e) {
        console.error('Pairing error:', e.message);
      }
    }
  }

  // Connection events
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('📷 QR Code (scan karo ya web pairing use karo):');
      qrcode.generate(qr, { small: true });
      server.setQR(qr);
    }

    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      console.log('❌ Connection band hua:', reason);
      if (reason !== DisconnectReason.loggedOut) {
        reconnectAttempts++;
        const delay = Math.min(5000 * reconnectAttempts, 30000);
        console.log(`🔄 ${delay / 1000}s mein reconnect... (attempt ${reconnectAttempts})`);
        setTimeout(startBot, delay);
      } else {
        console.log('Bot logout ho gaya. auth folder delete karke dobara pairing karo.');
      }
    }

    if (connection === 'open') {
      reconnectAttempts = 0;
      console.log(`✅ ${settings.botName} online hai!`);
      console.log(`📦 ${loader.getAllCommands().length} commands ready`);
      // Owner ko notification
      try {
        const ownerJid = settings.ownerNumber + '@s.whatsapp.net';
        await sock.sendMessage(ownerJid, { text: `🤖 *${settings.botName}* online ho gaya hai!\n\nType ${settings.prefix}menu for commands.` });
      } catch {}
    }
  });

  sock.ev.on('creds.update', saveCreds);

  // Messages
  sock.ev.on('messages.upsert', async ({ messages }) => {
    for (const msg of messages) {
      await handler.handleMessage(sock, msg);
    }
  });

  // Group updates (welcome/goodbye)
  sock.ev.on('group-participants.update', async (updates) => {
    await handler.handleGroupUpdate(sock, updates);
  });

  // Calls (anti-call)
  sock.ev.on('call', async (calls) => {
    await handler.handleCall(sock, calls);
  });

  // Status views
  sock.ev.on('messages.update', async (updates) => {
    for (const u of updates) {
      if (u.key.remoteJid === 'status@broadcast' && u.status === 'read') {
        // Status seen - kuch karna ho to yahan
      }
    }
  });
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Bot band ho raha hai...');
  db.save();
  process.exit(0);
});
process.on('SIGTERM', () => {
  db.save();
  process.exit(0);
});

startBot().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
