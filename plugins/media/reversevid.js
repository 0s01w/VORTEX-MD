// reversevid - Video ulta karo
module.exports = {
  name: 'reversevid',
  alias: ['reversevid'],
  category: 'media',
  desc: 'Video ulta karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔄 Video ulta ho raha hai...');
  },
};
