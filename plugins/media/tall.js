// tall - Tall image banao
module.exports = {
  name: 'tall',
  alias: ['tall'],
  category: 'media',
  desc: 'Tall image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .tall likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    const sharp = require('sharp');
    const tall = await sharp(buf).resize(512, 1024).toBuffer();
    await sock.sendMessage(jid, { image: tall }, { quoted: msg });
  },
};
