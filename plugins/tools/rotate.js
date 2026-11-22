// rotate - Image rotate karo
module.exports = {
  name: 'rotate',
  alias: ['rotate'],
  category: 'tools',
  desc: 'Image rotate karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .rotate likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const rotated = await sharp(buf).rotate(90).toBuffer();
    await sock.sendMessage(jid, { image: rotated, caption: '🔄 Rotated' }, { quoted: msg });
  },
};
