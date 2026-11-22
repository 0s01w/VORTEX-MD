// textsticker - Text sticker banao
module.exports = {
  name: 'textsticker',
  alias: ['textsticker'],
  category: 'media',
  desc: 'Text sticker banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .textsticker <text>');
    const { textToSticker } = require('../../lib/sticker');
    await sock.sendMessage(jid, { sticker: await textToSticker(query) }, { quoted: msg });
  },
};
