// setgoodbye - Set goodbye message text
module.exports = {
  name: 'setgoodbye',
  alias: ['setbye'],
  category: 'admin',
  desc: 'Set goodbye message text',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setgoodbye <text>');
    await reply('✅ Goodbye message set ho gaya: ' + query);
  },
};
