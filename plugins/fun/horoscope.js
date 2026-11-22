// horoscope - Aaj ka horoscope
module.exports = {
  name: 'horoscope',
  alias: ['zodiac'],
  category: 'fun',
  desc: 'Aaj ka horoscope',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Aaj tumhara din bohot acha jayega! 🌟',
      'Aaj koi purana dost milega! 😊',
      'Aaj paisay ka faida hoga! 💰'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
