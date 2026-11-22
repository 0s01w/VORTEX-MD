// zakat - Zakat calculator
module.exports = {
  name: 'zakat',
  alias: ['zakat'],
  category: 'misc',
  desc: 'Zakat calculator',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .zakat <total amount>');
    const amount = parseFloat(query);
    if (isNaN(amount)) return reply('Number likho!');
    await reply('💰 Zakat (2.5%): Rs. ' + (amount * 0.025).toFixed(2));
  },
};
