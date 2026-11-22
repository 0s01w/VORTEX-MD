// ============================================
// HELPER FUNCTIONS - sab jagah use hote hain
// ============================================
const axios = require('axios');

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getContentType(msg) {
  if (!msg.message) return null;
  const keys = Object.keys(msg.message);
  const found = keys.find(k => !['senderKeyDistributionMessage', 'ephemeralMessage', 'viewOnceMessage', 'viewOnceMessageV2'].includes(k));
  if (found) return found;
  // nested types
  if (msg.message.ephemeralMessage) return getContentType({ message: msg.message.ephemeralMessage.message });
  if (msg.message.viewOnceMessage) return getContentType({ message: msg.message.viewOnceMessage.message });
  if (msg.message.viewOnceMessageV2) return getContentType({ message: msg.message.viewOnceMessageV2.message });
  return null;
}

function getText(msg) {
  const type = getContentType(msg);
  if (!type) return '';
  const content = msg.message[type];
  if (typeof content === 'string') return content;
  return content?.text || content?.caption || content?.body || '';
}

function getQuoted(msg) {
  const type = getContentType(msg);
  if (!type) return null;
  return msg.message[type]?.contextInfo?.quotedMessage || null;
}

function getQuotedText(msg) {
  const q = getQuoted(msg);
  if (!q) return '';
  const key = Object.keys(q)[0];
  if (!key) return '';
  const c = q[key];
  return c?.text || c?.caption || '';
}

function getMentionedJids(msg) {
  const type = getContentType(msg);
  if (!type) return [];
  return msg.message[type]?.contextInfo?.mentionedJid || [];
}

function isUrl(str) {
  try { new URL(str); return true; } catch { return false; }
}

function formatTime(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return s + 's';
  const m = Math.floor(s / 60);
  if (m < 60) return m + 'm ' + (s % 60) + 's';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h ' + (m % 60) + 'm';
  const d = Math.floor(h / 24);
  return d + 'd ' + (h % 24) + 'h';
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getBuffer(url) {
  const res = await axios.get(url, { responseType: 'arraybuffer', timeout: 30000 });
  return Buffer.from(res.data);
}

async function fetchJson(url, options = {}) {
  const res = await axios.get(url, { timeout: 20000, ...options });
  return res.data;
}

function jidToNumber(jid) {
  return jid ? jid.split('@')[0].split(':')[0] : '';
}

function isGroupJid(jid) {
  return jid && jid.endsWith('@g.us');
}

function isLidJid(jid) {
  return jid && jid.endsWith('@lid');
}

module.exports = {
  sleep, getContentType, getText, getQuoted, getQuotedText, getMentionedJids,
  isUrl, formatTime, randomPick, randomNumber, getBuffer, fetchJson,
  jidToNumber, isGroupJid, isLidJid,
};
