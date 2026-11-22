// restore - Database restore karo
module.exports = {
  name: 'restore',
  alias: ['restore'],
  category: 'owner',
  desc: 'Database restore karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('💾 Backup file bhejo restore ke liye.');
  },
};
