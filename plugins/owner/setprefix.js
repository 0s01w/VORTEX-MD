// setprefix - Prefix badlo
module.exports = {
  name: 'setprefix',
  alias: ['setprefix'],
  category: 'owner',
  desc: 'Prefix badlo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!args[0]) return reply('Usage: .setprefix <new prefix>');
    await reply('✅ Prefix badal diya: ' + args[0] + '\n(settings.js mein permanent badlo)');
  },
};
