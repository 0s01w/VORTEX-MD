// png - Image PNG banao
module.exports = {
  name: 'png',
  alias: ['png'],
  category: 'media',
  desc: 'Image PNG banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .png likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const png = await sharp(buf).png().toBuffer();
    await sock.sendMessage(jid, { image: png, caption: '🖼️ PNG' }, { quoted: msg });
  },
};
