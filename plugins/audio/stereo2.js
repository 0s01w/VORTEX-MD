// stereo2 - Stereo effect
module.exports = {
  name: 'stereo2',
  alias: ['stereo'],
  category: 'audio',
  desc: 'Stereo effect',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎧 Stereo ho raha hai...');
  },
};
