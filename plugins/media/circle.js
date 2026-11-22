// circle - Circle sticker banao
module.exports = {
  name: 'circle',
  alias: ['circle'],
  category: 'media',
  desc: 'Circle sticker banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .circle likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const circle = await sharp(buf).resize(512, 512).composite([{ input: Buffer.from('<svg><circle cx="256" cy="256" r="256"/></svg>'), blend: 'dest-in' }]).png().toBuffer();
    await sock.sendMessage(jid, { image: circle }, { quoted: msg });
  },
};
