// sticker - Image se sticker banao
module.exports = {
  name: 'sticker',
  alias: ['sticker', 's'],
  category: 'tools',
  desc: 'Image se sticker banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage && !q?.videoMessage) return reply('Kisi image/video ko reply karke .sticker likho.');
    await reply('⏳ Sticker ban raha hai...');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const { imageToSticker } = require('../../lib/sticker');
    const sticker = await imageToSticker(buf);
    await sock.sendMessage(jid, { sticker }, { quoted: msg });
  },
};
