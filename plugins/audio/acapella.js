// acapella - Acapella version
module.exports = {
  name: 'acapella',
  alias: ['acapella'],
  category: 'audio',
  desc: 'Acapella version',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎤 Acapella ban raha hai...');
  },
};
