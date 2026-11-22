// blur - Image blur karo
module.exports = {
  name: 'blur',
  alias: ['blur'],
  category: 'tools',
  desc: 'Image blur karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .blur likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const blurred = await sharp(buf).blur(5).toBuffer();
    await sock.sendMessage(jid, { image: blurred, caption: '🌫️ Blurred' }, { quoted: msg });
  },
};
