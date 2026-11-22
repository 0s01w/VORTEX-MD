// setdesc - Change group description
module.exports = {
  name: 'setdesc',
  alias: ['setdescription'],
  category: 'admin',
  desc: 'Change group description',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setdesc <new description>');
    await sock.groupUpdateDescription(jid, query);
    await reply('✅ Group description update ho gayi.');
  },
};
