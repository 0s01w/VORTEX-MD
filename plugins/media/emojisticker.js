// emojisticker - Emoji sticker banao
module.exports = {
  name: 'emojisticker',
  alias: ['emojisticker'],
  category: 'media',
  desc: 'Emoji sticker banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .emojisticker 😀');
    const { textToSticker } = require('../../lib/sticker');
    await sock.sendMessage(jid, { sticker: await textToSticker(query) }, { quoted: msg });
  },
};
