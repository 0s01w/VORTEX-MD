// fortune - Fortune cookie
module.exports = {
  name: 'fortune',
  alias: ['fortune'],
  category: 'fun',
  desc: 'Fortune cookie',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      '🥠 Aaj koi achi khabar milegi!',
      '🥠 Tumhari mehnat rang layegi!',
      '🥠 Ek purana dost yaad karega!'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
