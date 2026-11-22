// balance - Coins check karo
module.exports = {
  name: 'balance',
  alias: ['bal', 'coins'],
  category: 'tools',
  desc: 'Coins check karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('💰 Tumhare coins: ' + ctx.user.coins);
  },
};
