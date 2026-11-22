// resize - Image resize karo
module.exports = {
  name: 'resize',
  alias: ['resize'],
  category: 'tools',
  desc: 'Image resize karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .resize likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const resized = await sharp(buf).resize(512, 512).toBuffer();
    await sock.sendMessage(jid, { image: resized, caption: '📐 Resized' }, { quoted: msg });
  },
};
