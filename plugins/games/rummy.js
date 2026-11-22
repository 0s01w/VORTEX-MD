// rummy - Rummy game
module.exports = {
  name: 'rummy',
  alias: ['rummy'],
  category: 'games',
  desc: 'Rummy game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🃏 Rummy: Cards bante hain! Agli chal karo.');
  },
};
