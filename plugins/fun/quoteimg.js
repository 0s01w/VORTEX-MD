// quoteimg - Quote image banao
module.exports = {
  name: 'quoteimg',
  alias: ['quoteimg'],
  category: 'fun',
  desc: 'Quote image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .quoteimg <text>');
    const { textToSticker } = require('../../lib/sticker');
    const buf = await textToSticker(query);
    await sock.sendMessage(jid, { sticker: buf }, { quoted: msg });
  },
};
