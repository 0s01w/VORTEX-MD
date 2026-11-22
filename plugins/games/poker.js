// poker - Poker hand
module.exports = {
  name: 'poker',
  alias: ['poker'],
  category: 'games',
  desc: 'Poker hand',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const cards = ['A', 'K', 'Q', 'J', '10'];
    const hand = [0,1,2].map(() => cards[Math.floor(Math.random() * cards.length)]).join(' ');
    await reply('🃏 Tumhara hand: ' + hand);
  },
};
