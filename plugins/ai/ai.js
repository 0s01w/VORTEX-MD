// ai - Gemini AI se sawal poocho
module.exports = {
  name: 'ai',
  alias: ['gemini', 'gpt', 'ask'],
  category: 'ai',
  desc: 'Gemini AI se sawal poocho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .ai <sawal>');
    await reply('🤖 Soch raha hoon...');
    const { askAI } = require('../../lib/ai');
    const ans = await askAI(query);
    await reply(ans);
  },
};
