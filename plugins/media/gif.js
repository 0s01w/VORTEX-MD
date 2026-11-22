// gif - GIF banao (video se)
module.exports = {
  name: 'gif',
  alias: ['gif'],
  category: 'media',
  desc: 'GIF banao (video se)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎬 GIF banane ke liye video bhejo! (demo)');
  },
};
