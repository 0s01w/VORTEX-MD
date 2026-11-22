// blackjack - Blackjack game
module.exports = {
  name: 'blackjack',
  alias: ['bj'],
  category: 'games',
  desc: 'Blackjack game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const dealer = Math.floor(Math.random() * 10) + 12;
    const player = Math.floor(Math.random() * 10) + 12;
    await reply('🃏 Tum: ' + player + ' vs Dealer: ' + dealer + '\n' + (player > dealer && player <= 21 ? '🎉 Tum jeet gaye!' : '😢 Dealer jeet gaya!'));
  },
};
