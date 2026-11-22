// promoteall - Promote all to admin
module.exports = {
  name: 'promoteall',
  alias: ['promall'],
  category: 'admin',
  desc: 'Promote all to admin',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const members = meta.participants.map(p => p.id);
    await sock.groupParticipantsUpdate(jid, members, 'promote');
    await reply('✅ Sab ko admin bana diya.');
  },
};
