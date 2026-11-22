// sepia - Image sepia karo
module.exports = {
  name: 'sepia',
  alias: ['sepia'],
  category: 'tools',
  desc: 'Image sepia karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .sepia likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const sepia = await sharp(buf).modulate({ brightness: 1.1, saturation: 0.5, hue: 30 }).toBuffer();
    await sock.sendMessage(jid, { image: sepia, caption: '🟤 Sepia' }, { quoted: msg });
  },
};
