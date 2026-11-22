// square - Square image banao
module.exports = {
  name: 'square',
  alias: ['square'],
  category: 'media',
  desc: 'Square image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .square likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const sq = await sharp(buf).resize(512, 512, { fit: 'cover' }).toBuffer();
    await sock.sendMessage(jid, { image: sq }, { quoted: msg });
  },
};
