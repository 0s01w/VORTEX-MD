// mp4tomp3 - Video se audio nikalo
module.exports = {
  name: 'mp4tomp3',
  alias: ['mp4tomp3'],
  category: 'media',
  desc: 'Video se audio nikalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Audio nikal raha hai... (ffmpeg chahiye)');
  },
};
