// gemini - Gemini AI (alias)
module.exports = {
  name: 'gemini',
  alias: ['gemini'],
  category: 'ai',
  desc: 'Gemini AI (alias)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .gemini <sawal>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI(query));
  },
};
