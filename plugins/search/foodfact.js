// foodfact - Food fact
module.exports = {
  name: 'foodfact',
  alias: ['foodfact'],
  category: 'search',
  desc: 'Food fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🍕 Food fact: Pehla pizza Italy mein bana tha!');
  },
};
