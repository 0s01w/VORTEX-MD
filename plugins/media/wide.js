// wide - Wide image banao
module.exports = {
  name: 'wide',
  alias: ['wide'],
  category: 'media',
  desc: 'Wide image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .wide likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const wide = await sharp(buf).resize(1024, 512).toBuffer();
    await sock.sendMessage(jid, { image: wide }, { quoted: msg });
  },
};
