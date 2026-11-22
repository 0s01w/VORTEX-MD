// mutevid - Video mute karo
module.exports = {
  name: 'mutevid',
  alias: ['mutevid'],
  category: 'media',
  desc: 'Video mute karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔇 Video mute ho raha hai...');
  },
};
