// trivia - Trivia fact
module.exports = {
  name: 'trivia',
  alias: ['trivias'],
  category: 'fun',
  desc: 'Trivia fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Trivia: Pehla computer bug ek asli keeda tha! 🐛',
      'Trivia: Pehla emoji 1982 mein use hua tha! 😊',
      'Trivia: Pehla website 1991 mein bana tha! 🌐'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
