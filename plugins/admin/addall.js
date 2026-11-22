// addall - Add all contacts (slow)
module.exports = {
  name: 'addall',
  alias: ['addall'],
  category: 'admin',
  desc: 'Add all contacts (slow)',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('⚠️ Ye feature slow hai. Ek-ek karke add karo .add se.');
  },
};
