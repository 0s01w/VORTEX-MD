// spades - Spades game
module.exports = {
  name: 'spades',
  alias: ['spades'],
  category: 'games',
  desc: 'Spades game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('♠ Spades ready! Trump suit: Spades');
  },
};
