// nameidea - Naam ke ideas do
module.exports = {
  name: 'nameidea',
  alias: ['nameidea'],
  category: 'ai',
  desc: 'Naam ke ideas do',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .nameidea <type>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Give 10 name ideas for: ' + query));
  },
};
