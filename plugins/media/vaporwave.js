// vaporwave - Vaporwave version banao
module.exports = {
  name: 'vaporwave',
  alias: ['vaporwave'],
  category: 'media',
  desc: 'Vaporwave version banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌊 Vaporwave ban raha hai...');
  },
};
