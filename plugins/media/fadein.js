// fadein - Fade in effect
module.exports = {
  name: 'fadein',
  alias: ['fadein'],
  category: 'media',
  desc: 'Fade in effect',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Fade in ho raha hai...');
  },
};
