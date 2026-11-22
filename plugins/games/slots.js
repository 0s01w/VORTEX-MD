// slots - Slot machine game
module.exports = {
  name: 'slots',
  alias: ['slot'],
  category: 'games',
  desc: 'Slot machine game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const symbols = ['🍒', '🍋', '🔔', '⭐', '💎'];
    const spin = [0,1,2].map(() => symbols[Math.floor(Math.random() * symbols.length)]).join(' ');
    const win = spin.split(' ')[0] === spin.split(' ')[1] && spin.split(' ')[1] === spin.split(' ')[2];
    await reply('🎰 ' + spin + '\n' + (win ? '🎉 JACKPOT! Tum jeet gaye!' : '😢 Dobara try karo!'));
  },
};
