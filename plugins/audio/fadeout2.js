// fadeout2 - Fade out
module.exports = {
  name: 'fadeout2',
  alias: ['fadeout'],
  category: 'audio',
  desc: 'Fade out',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Fade out ho raha hai...');
  },
};
