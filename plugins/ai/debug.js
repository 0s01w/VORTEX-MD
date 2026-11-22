// debug - Code debug karwao
module.exports = {
  name: 'debug',
  alias: ['debug'],
  category: 'ai',
  desc: 'Code debug karwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .debug <code>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Debug this code and fix errors:\n' + query));
  },
};
