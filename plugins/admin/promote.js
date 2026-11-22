// promote - Promote member to admin
module.exports = {
  name: 'promote',
  alias: ['prom'],
  category: 'admin',
  desc: 'Promote member to admin',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .promote <number>');
    await sock.groupParticipantsUpdate(jid, [target], 'promote');
    await reply('✅ @' + target.split('@')[0] + ' ab admin hai.');
  },
};
