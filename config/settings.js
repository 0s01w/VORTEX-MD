// ============================================
// BOT SETTINGS - Yahan apni details badlo
// ============================================
require('dotenv').config();

module.exports = {
  // Bot ki pehchan
  botName: process.env.BOT_NAME || 'VORTEX-MD',
  botVersion: '1.0.0',
  botOwner: process.env.BOT_OWNER || 'Owner',
  ownerNumber: process.env.OWNER_NUMBER || '923000000000', // <-- apna number (country code + number, + nahi)
  prefix: process.env.PREFIX || '.',
  language: 'en', // 'en' ya 'ur'

  // Gemini AI (free key: https://aistudio.google.com/app/apikey)
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  geminiModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash',

  // Server
  port: process.env.PORT || 3000,

  // Pairing
  phoneNumber: process.env.PHONE_NUMBER || '', // jis number pe bot chalana hai (country code + number)

  // Features on/off
  features: {
    welcome: true,
    goodbye: true,
    autoRead: false,
    autoTyping: false,
    antiLink: false,
    antiBadword: false,
    antiCall: true,
    antiBot: false,
    antiDelete: false,
    antiSpam: true,
    autoStatus: false,
    chatbot: false,
  },

  // Anti-spam
  antiSpam: {
    maxMessages: 5,
    timeWindow: 5000, // 5 seconds
    action: 'warn', // 'warn' ya 'kick'
  },

  // Economy
  economy: {
    startCoins: 100,
    dailyReward: 50,
    commandCost: 0,
  },

  // Limits
  maxStoreMessages: 20,
};
