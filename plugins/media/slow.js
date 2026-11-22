// slow - Video slow karo
module.exports = {
  name: 'slow',
  alias: ['slow'],
  category: 'media',
  desc: 'Video slow karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🐌 Slow ho raha hai...');
  },
};
