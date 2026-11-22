// uno - UNO card game
module.exports = {
  name: 'uno',
  alias: ['uno'],
  category: 'games',
  desc: 'UNO card game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const colors = ['Red', 'Blue', 'Green', 'Yellow'];
    await reply('🃏 UNO: ' + colors[Math.floor(Math.random() * colors.length)] + ' card mila!');
  },
};
