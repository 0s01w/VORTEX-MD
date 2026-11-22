// demote - Demote admin to member
module.exports = {
  name: 'demote',
  alias: ['dem'],
  category: 'admin',
  desc: 'Demote admin to member',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .demote <number>');
    await sock.groupParticipantsUpdate(jid, [target], 'demote');
    await reply('✅ @' + target.split('@')[0] + ' ko demote kar diya.');
  },
};
