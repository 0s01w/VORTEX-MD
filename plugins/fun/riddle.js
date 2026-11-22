// riddle - Random riddle
module.exports = {
  name: 'riddle',
  alias: ['riddles'],
  category: 'fun',
  desc: 'Random riddle',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Pehli: Jitna lo, utna badhta hai. Jawab: Qarz! 💸',
      'Pehli: Aankh hai lekin dekh nahi sakti. Jawab: Sui! 🪡',
      'Pehli: Subah khate hain, shaam ko nahi. Jawab: Nasha! 😄'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
