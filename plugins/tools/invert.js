// invert - Image invert karo
module.exports = {
  name: 'invert',
  alias: ['invert'],
  category: 'tools',
  desc: 'Image invert karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .invert likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const inverted = await sharp(buf).negate().toBuffer();
    await sock.sendMessage(jid, { image: inverted, caption: '🔄 Inverted' }, { quoted: msg });
  },
};
