// webp - Image WebP banao
module.exports = {
  name: 'webp',
  alias: ['webp'],
  category: 'media',
  desc: 'Image WebP banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .webp likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const webp = await sharp(buf).webp().toBuffer();
    await sock.sendMessage(jid, { image: webp, caption: '🖼️ WebP' }, { quoted: msg });
  },
};
