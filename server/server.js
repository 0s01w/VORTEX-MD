// ============================================
// WEB SERVER - Pairing page + Dashboard + Health check
// Ye server bot ke sath chalta hai (Render/VPS pe)
// ============================================
const express = require('express');
const path = require('path');
const settings = require('../config/settings');
const db = require('../lib/database');
const loader = require('../handler/loader');

let sockRef = null;
let pairingCodeCache = null;
let qrCache = null;

function setSocket(sock) { sockRef = sock; }
function setPairingCode(code) { pairingCodeCache = code; }
function setQR(qr) { qrCache = qr; }

function startServer() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));

  // Health check (Uptime monitoring ke liye)
  app.get('/health', (req, res) => {
    res.json({
      status: 'online',
      bot: settings.botName,
      connected: sockRef ? true : false,
      uptime: process.uptime(),
      commands: loader.getAllCommands().length,
      timestamp: new Date().toISOString(),
    });
  });

  // Pairing code API
  app.get('/api/pairing-code', async (req, res) => {
    const phone = req.query.phone;
    if (!phone) return res.status(400).json({ error: 'phone number required' });
    if (!sockRef) return res.status(503).json({ error: 'Bot abhi connect nahi hua, thoda wait karo' });
    if (sockRef.authState.creds.registered) return res.json({ message: 'Bot already paired hai!' });
    try {
      const clean = phone.replace(/[^0-9]/g, '');
      const code = await sockRef.requestPairingCode(clean);
      pairingCodeCache = code;
      res.json({ code, phone: clean });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  // QR API
  app.get('/api/qr', (req, res) => {
    if (qrCache) res.json({ qr: qrCache });
    else res.status(404).json({ error: 'QR abhi available nahi' });
  });

  // Stats API
  app.get('/api/stats', (req, res) => {
    res.json({
      bot: settings.botName,
      version: settings.botVersion,
      connected: sockRef ? true : false,
      totalCommands: loader.getAllCommands().length,
      totalMessages: db.db.stats.totalMessages,
      totalCommandsUsed: db.db.stats.totalCommands,
      totalUsers: Object.keys(db.db.users).length,
      totalGroups: Object.keys(db.db.groups).length,
      uptime: process.uptime(),
    });
  });

  // Commands API
  app.get('/api/commands', (req, res) => {
    const cats = loader.getCategories();
    const result = {};
    for (const [cat, plugins] of Object.entries(cats)) {
      result[cat] = plugins.map(p => ({ name: p.name, desc: p.desc, alias: p.alias || [] }));
    }
    res.json(result);
  });

  // Pairing page (default)
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pairing.html'));
  });

  const port = settings.port;
  app.listen(port, '0.0.0.0', () => {
    console.log(`🌐 Web server: http://localhost:${port}`);
    console.log(`📱 Pairing page: http://localhost:${port}/`);
  });

  return app;
}

module.exports = { startServer, setSocket, setPairingCode, setQR };
