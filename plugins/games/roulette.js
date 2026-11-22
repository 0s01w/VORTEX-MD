// roulette - Roulette spin
module.exports = {
  name: 'roulette',
  alias: ['roulette'],
  category: 'games',
  desc: 'Roulette spin',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const colors = ['Red', 'Black', 'Green'];
    const c = colors[Math.floor(Math.random() * colors.length)];
    const n = Math.floor(Math.random() * 37);
    await reply('🎡 Roulette: ' + c + ' ' + n);
  },
};
