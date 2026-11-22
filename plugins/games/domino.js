// domino - Domino game
module.exports = {
  name: 'domino',
  alias: ['domino'],
  category: 'games',
  desc: 'Domino game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const a = Math.floor(Math.random() * 7);
    const b = Math.floor(Math.random() * 7);
    await reply('🎲 Domino: [' + a + '|' + b + ']');
  },
};
