// fadeout - Fade out effect
module.exports = {
  name: 'fadeout',
  alias: ['fadeout'],
  category: 'media',
  desc: 'Fade out effect',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Fade out ho raha hai...');
  },
};
