// crop - Image crop karo
module.exports = {
  name: 'crop',
  alias: ['crop'],
  category: 'media',
  desc: 'Image crop karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .crop likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const cropped = await sharp(buf).extract({ left: 50, top: 50, width: 400, height: 400 }).toBuffer();
    await sock.sendMessage(jid, { image: cropped }, { quoted: msg });
  },
};
