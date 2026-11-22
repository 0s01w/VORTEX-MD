// fact - Random amazing fact
module.exports = {
  name: 'fact',
  alias: ['facts'],
  category: 'fun',
  desc: 'Random amazing fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Octopus ke 3 dil hote hain! 🐙',
      'Honey kabhi kharab nahi hota. 3000 saal purana honey bhi khane layak hai! 🍯',
      'Banana berries hain, lekin strawberry berries nahi hain! 🍌'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
