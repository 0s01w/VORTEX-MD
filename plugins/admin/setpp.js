// setpp - Change group profile picture
module.exports = {
  name: 'setpp',
  alias: ['grouppp'],
  category: 'admin',
  desc: 'Change group profile picture',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuoted } = require('../../lib/myfunc');
    const q = getQuoted(ctx.msg);
    if (!q?.imageMessage) return reply('Kisi image ko reply karke .setpp likho.');
    const buf = await sock.downloadMediaMessage(ctx.msg);
    await sock.groupUpdatePicture(jid, buf);
    await reply('✅ Group PP badal di.');
  },
};
