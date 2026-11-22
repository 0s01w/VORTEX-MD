// keyword - Keywords nikalo
module.exports = {
  name: 'keyword',
  alias: ['keyword'],
  category: 'ai',
  desc: 'Keywords nikalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .keyword <text>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Extract keywords from: ' + query));
  },
};
