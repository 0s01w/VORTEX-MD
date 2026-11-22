// setsubject - Change group name
module.exports = {
  name: 'setsubject',
  alias: ['setname'],
  category: 'admin',
  desc: 'Change group name',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setsubject <new name>');
    await sock.groupUpdateSubject(jid, query);
    await reply('✅ Group ka naam badal diya: ' + query);
  },
};
