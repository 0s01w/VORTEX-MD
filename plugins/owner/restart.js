// restart - Bot restart karo
module.exports = {
  name: 'restart',
  alias: ['restart'],
  category: 'owner',
  desc: 'Bot restart karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔄 Bot restart ho raha hai...');
    setTimeout(() => process.exit(0), 2000);
  },
};
