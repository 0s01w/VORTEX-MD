// wheel - Wheel of fortune
module.exports = {
  name: 'wheel',
  alias: ['wheel'],
  category: 'games',
  desc: 'Wheel of fortune',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const prizes = ['100 coins', '50 coins', '200 coins', '10 coins', '500 coins', 'Nothing 😢'];
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    await reply('🎡 Wheel ghuma: ' + prize);
  },
};
