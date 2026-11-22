// 8ball - Magic 8-ball jawab
module.exports = {
  name: '8ball',
  alias: ['8ball', 'magic8'],
  category: 'fun',
  desc: 'Magic 8-ball jawab',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Haan, bilkul! ✅',
      'Nahi, bilkul nahi! ❌',
      'Shayad... dobara poocho 🔮',
      'Zaroor hoga! 🌟',
      'Mushkil hai, lekin mumkin hai 💪'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
