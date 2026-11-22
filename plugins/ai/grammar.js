// grammar - Grammar check karo
module.exports = {
  name: 'grammar',
  alias: ['grammar'],
  category: 'ai',
  desc: 'Grammar check karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .grammar <sentence>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Check grammar and correct: ' + query));
  },
};
