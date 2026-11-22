// stereo - Stereo effect dalo
module.exports = {
  name: 'stereo',
  alias: ['stereo'],
  category: 'media',
  desc: 'Stereo effect dalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎧 Stereo ho raha hai...');
  },
};
