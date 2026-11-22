// translate - Text translate karo
module.exports = {
  name: 'translate',
  alias: ['trans'],
  category: 'ai',
  desc: 'Text translate karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .translate <text>');
    const { translateText } = require('../../lib/ai');
    await reply(await translateText(query, 'Urdu'));
  },
};
