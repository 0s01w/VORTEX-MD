// future - Future batao
module.exports = {
  name: 'future',
  alias: ['future'],
  category: 'fun',
  desc: 'Future batao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Tumhara future bright hai! 🌟 2027 mein tum bohot kamyab hoge.',
      'Tum bohot mehnat karoge aur phal milega! 💪',
      'Tum travel karoge aur naye dost banaoge! ✈️'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
