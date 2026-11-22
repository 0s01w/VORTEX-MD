// enhance - Image enhance karo
module.exports = {
  name: 'enhance',
  alias: ['enhance'],
  category: 'tools',
  desc: 'Image enhance karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .enhance likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const enhanced = await sharp(buf).sharpen().modulate({ brightness: 1.1, saturation: 1.2 }).toBuffer();
    await sock.sendMessage(jid, { image: enhanced, caption: '✨ Enhanced' }, { quoted: msg });
  },
};
