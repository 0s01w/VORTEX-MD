// translateen - Urdu to English
module.exports = {
  name: 'translateen',
  alias: ['transen'],
  category: 'ai',
  desc: 'Urdu to English',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .translateen <text>');
    const { translateText } = require('../../lib/ai');
    await reply(await translateText(query, 'English'));
  },
};
