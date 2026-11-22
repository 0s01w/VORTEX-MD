// solitaire - Solitaire card
module.exports = {
  name: 'solitaire',
  alias: ['solitaire'],
  category: 'games',
  desc: 'Solitaire card',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const suits = ['♠', '♥', '♦', '♣'];
    const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8'];
    await reply('🃏 Card: ' + ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)]);
  },
};
