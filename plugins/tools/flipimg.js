// flipimg - Image flip karo
module.exports = {
  name: 'flipimg',
  alias: ['flip'],
  category: 'tools',
  desc: 'Image flip karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .flipimg likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const flipped = await sharp(buf).flop().toBuffer();
    await sock.sendMessage(jid, { image: flipped, caption: '↔️ Flipped' }, { quoted: msg });
  },
};
