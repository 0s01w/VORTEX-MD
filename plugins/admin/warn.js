// warn - Warn a member
module.exports = {
  name: 'warn',
  alias: ['warning'],
  category: 'admin',
  desc: 'Warn a member',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') : '';
    if (!target) return reply('Usage: .warn <number> [reason]');
    await reply('⚠️ Warning @' + target + ': ' + (args.slice(1).join(' ') || 'Rule follow karo!'), );
  },
};
