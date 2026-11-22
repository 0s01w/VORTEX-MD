// compress - Image compress karo
module.exports = {
  name: 'compress',
  alias: ['compress'],
  category: 'media',
  desc: 'Image compress karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .compress likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const comp = await sharp(buf).jpeg({ quality: 50 }).toBuffer();
    await sock.sendMessage(jid, { image: comp, caption: '📦 Compressed: ' + Math.round(comp.length/1024) + 'KB' }, { quoted: msg });
  },
};
