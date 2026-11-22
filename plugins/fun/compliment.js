// compliment - Random compliment
module.exports = {
  name: 'compliment',
  alias: ['comp'],
  category: 'fun',
  desc: 'Random compliment',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Tum bohot achay insaan ho! 🌟',
      'Tumhari smile sab se pyari hai! 😊',
      'Tum bohot talented ho, aise hi chamakte raho! ✨'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
