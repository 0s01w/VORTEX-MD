// quiz - Random quiz sawal
module.exports = {
  name: 'quiz',
  alias: ['quiz'],
  category: 'fun',
  desc: 'Random quiz sawal',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Sawal: Pakistan ka capital kya hai? Jawab: Islamabad! 🇵🇰',
      'Sawal: Duniya ka sab se bara ocean? Jawab: Pacific! 🌊',
      'Sawal: 2+2 kitne hote hain? Jawab: 4! ➕'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
