// meme2 - Meme banao
module.exports = {
  name: 'meme2',
  alias: ['meme2'],
  category: 'media',
  desc: 'Meme banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .meme2 <text>');
    const { textToSticker } = require('../../lib/sticker');
    await sock.sendMessage(jid, { sticker: await textToSticker(query) }, { quoted: msg });
  },
};
