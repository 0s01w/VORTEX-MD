// shutdown - Bot band karo
module.exports = {
  name: 'shutdown',
  alias: ['shutdown'],
  category: 'owner',
  desc: 'Bot band karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('👋 Bot band ho raha hai...');
    setTimeout(() => process.exit(0), 2000);
  },
};
