// toimg - Sticker se image banao
module.exports = {
  name: 'toimg',
  alias: ['toimg'],
  category: 'tools',
  desc: 'Sticker se image banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.stickerMessage) return reply('Kisi sticker ko reply karke .toimg likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    await sock.sendMessage(jid, { image: buf, caption: '🖼️ Sticker se image' }, { quoted: msg });
  },
};
