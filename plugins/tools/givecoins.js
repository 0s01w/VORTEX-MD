// givecoins - Coins do
module.exports = {
  name: 'givecoins',
  alias: ['give'],
  category: 'tools',
  desc: 'Coins do',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0]; const amount = parseInt(args[1]);
    if (!target || !amount) return reply('Usage: .givecoins <number> <amount>');
    await reply('✅ ' + amount + ' coins de diye!');
  },
};
