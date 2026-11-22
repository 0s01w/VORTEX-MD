// memeimg - Meme image banao
module.exports = {
  name: 'memeimg',
  alias: ['memeimg'],
  category: 'fun',
  desc: 'Meme image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .memeimg <text>');
    const { textToSticker } = require('../../lib/sticker');
    const buf = await textToSticker(query);
    await sock.sendMessage(jid, { sticker: buf }, { quoted: msg });
  },
};
