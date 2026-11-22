// add - Add member to group
module.exports = {
  name: 'add',
  alias: ['invite'],
  category: 'admin',
  desc: 'Add member to group',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .add <number>');
    await sock.groupParticipantsUpdate(jid, [target], 'add');
    await reply('✅ @' + target.split('@')[0] + ' ko add kar diya.');
  },
};
