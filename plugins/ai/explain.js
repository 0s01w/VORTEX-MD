// explain - Kisi cheez ko samjhao
module.exports = {
  name: 'explain',
  alias: ['explain'],
  category: 'ai',
  desc: 'Kisi cheez ko samjhao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .explain <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Explain in simple words: ' + query));
  },
};
