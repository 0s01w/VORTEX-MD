// captionimg - Image pe caption dalo
module.exports = {
  name: 'captionimg',
  alias: ['captionimg'],
  category: 'media',
  desc: 'Image pe caption dalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Image ko reply karke .captionimg <text> likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    await sock.sendMessage(jid, { image: buf, caption: query || 'Caption' }, { quoted: msg });
  },
};
