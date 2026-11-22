// roza - Roza info
module.exports = {
  name: 'roza',
  alias: ['roza'],
  category: 'misc',
  desc: 'Roza info',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌙 Roza: Niyat se pehle sehri karo, iftar pe khajoor se roza kholo.');
  },
};
