// ============================================
// DATABASE - JSON file based (simple + working)
// Data folder mein save hota hai
// ============================================
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'database.json');

let db = {
  users: {},      // userId -> { coins, level, xp, banned, ... }
  groups: {},     // groupId -> { welcome, antilink, ... }
  settings: {},   // global settings
  stats: { totalCommands: 0, totalMessages: 0 },
  bannedUsers: [],
  bannedGroups: [],
  premium: {},    // userId -> expiry timestamp
};

function load() {
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, 'utf8');
      const parsed = JSON.parse(raw);
      db = { ...db, ...parsed };
    }
  } catch (e) {
    console.error('[DB] Load error:', e.message);
  }
}

function save() {
  try {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
  } catch (e) {
    console.error('[DB] Save error:', e.message);
  }
}

// Auto-save har 30 second
setInterval(save, 30000);

function getUser(id) {
  if (!db.users[id]) {
    const settings = require('../config/settings');
    db.users[id] = {
      coins: settings.economy.startCoins,
      xp: 0,
      level: 1,
      banned: false,
      premium: false,
      lastDaily: 0,
      commandsUsed: 0,
      registeredAt: Date.now(),
    };
    save();
  }
  return db.users[id];
}

function getGroup(id) {
  if (!db.groups[id]) {
    db.groups[id] = {
      welcome: true,
      goodbye: true,
      antilink: false,
      antibadword: false,
      antibot: false,
      antispam: false,
      onlyAdmin: false,
      muted: false,
      members: 0,
    };
    save();
  }
  return db.groups[id];
}

function isBannedUser(id) {
  return db.bannedUsers.includes(id) || (db.users[id] && db.users[id].banned);
}

function isBannedGroup(id) {
  return db.bannedGroups.includes(id);
}

function isPremium(id) {
  const exp = db.premium[id];
  if (!exp) return false;
  if (Date.now() > exp) {
    delete db.premium[id];
    save();
    return false;
  }
  return true;
}

module.exports = { load, save, getUser, getGroup, isBannedUser, isBannedGroup, isPremium, db };
