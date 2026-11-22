// fadein2 - Fade in
module.exports = {
  name: 'fadein2',
  alias: ['fadein'],
  category: 'audio',
  desc: 'Fade in',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Fade in ho raha hai...');
  },
};
