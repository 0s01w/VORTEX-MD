// code - AI se code likhwao
module.exports = {
  name: 'code',
  alias: ['code'],
  category: 'ai',
  desc: 'AI se code likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .code <kya chahiye>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write code for: ' + query + '. Only code, no explanation.'));
  },
};
