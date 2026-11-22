// kick - Remove member from group
module.exports = {
  name: 'kick',
  alias: ['k'],
  category: 'admin',
  desc: 'Remove member from group',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = ctx.msg.key.participant ? null : (args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null);
    if (!target) return reply('Usage: .kick <number>');
    await sock.groupParticipantsUpdate(jid, [target], 'remove');
    await reply('✅ @' + target.split('@')[0] + ' ko kick kar diya.', );
  },
};
