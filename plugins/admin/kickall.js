// kickall - Kick all non-admin members
module.exports = {
  name: 'kickall',
  alias: ['kickall'],
  category: 'admin',
  desc: 'Kick all non-admin members',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const members = meta.participants.filter(p => !p.admin).map(p => p.id);
    await sock.groupParticipantsUpdate(jid, members, 'remove');
    await reply('✅ Sab non-admin members kick kar diye (' + members.length + ').');
  },
};
