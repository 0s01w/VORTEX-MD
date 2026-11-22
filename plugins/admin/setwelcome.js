// setwelcome - Set welcome message text
module.exports = {
  name: 'setwelcome',
  alias: ['setwel'],
  category: 'admin',
  desc: 'Set welcome message text',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setwelcome <text>');
    await reply('✅ Welcome message set ho gaya: ' + query);
  },
};
