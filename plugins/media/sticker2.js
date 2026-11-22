// sticker2 - Sticker banao (media)
module.exports = {
  name: 'sticker2',
  alias: ['sticker2'],
  category: 'media',
  desc: 'Sticker banao (media)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .sticker2 likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const { imageToSticker } = require('../../lib/sticker');
    await sock.sendMessage(jid, { sticker: await imageToSticker(buf) }, { quoted: msg });
  },
};
