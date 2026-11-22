// translate2 - Translate karo
module.exports = {
  name: 'translate2',
  alias: ['tr'],
  category: 'tools',
  desc: 'Translate karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .translate2 <text>');
    const { translateText } = require('../../lib/ai');
    await reply(await translateText(query, 'Urdu'));
  },
};
