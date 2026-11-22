// leave - Bot leaves the group
module.exports = {
  name: 'leave',
  alias: ['left'],
  category: 'admin',
  desc: 'Bot leaves the group',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('👋 Allah Hafiz! Bot group chor raha hai...');
    await sock.groupLeave(jid);
  },
};
