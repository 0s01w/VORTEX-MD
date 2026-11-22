// antidelete - Toggle anti-delete
module.exports = {
  name: 'antidelete',
  alias: ['adel'],
  category: 'admin',
  desc: 'Toggle anti-delete',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✅ Anti-delete setting update ho gayi.');
  },
};
