// trim - Video trim karo
module.exports = {
  name: 'trim',
  alias: ['trim'],
  category: 'media',
  desc: 'Video trim karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✂️ Video trim ho raha hai...');
  },
};
