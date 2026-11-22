// karaoke - Karaoke version
module.exports = {
  name: 'karaoke',
  alias: ['karaoke'],
  category: 'audio',
  desc: 'Karaoke version',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎤 Karaoke ban raha hai...');
  },
};
