// vaporwave2 - Vaporwave banao
module.exports = {
  name: 'vaporwave2',
  alias: ['vaporwave'],
  category: 'audio',
  desc: 'Vaporwave banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌊 Vaporwave ban raha hai...');
  },
};
