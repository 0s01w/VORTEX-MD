// demoteall - Demote all admins
module.exports = {
  name: 'demoteall',
  alias: ['demall'],
  category: 'admin',
  desc: 'Demote all admins',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const admins = meta.participants.filter(p => p.admin).map(p => p.id);
    await sock.groupParticipantsUpdate(jid, admins, 'demote');
    await reply('✅ Sab admins demote kar diye.');
  },
};
