// bridge - Bridge game
module.exports = {
  name: 'bridge',
  alias: ['bridge'],
  category: 'games',
  desc: 'Bridge game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌉 Bridge game ready! Bid lagao.');
  },
};
