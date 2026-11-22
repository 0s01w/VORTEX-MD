// grayscale - Image grayscale karo
module.exports = {
  name: 'grayscale',
  alias: ['gray'],
  category: 'tools',
  desc: 'Image grayscale karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .grayscale likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const gray = await sharp(buf).grayscale().toBuffer();
    await sock.sendMessage(jid, { image: gray, caption: '⚫ Grayscale' }, { quoted: msg });
  },
};
