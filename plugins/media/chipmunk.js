// chipmunk - Chipmunk voice banao
module.exports = {
  name: 'chipmunk',
  alias: ['chipmunk'],
  category: 'media',
  desc: 'Chipmunk voice banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🐿️ Chipmunk voice ban rahi hai...');
  },
};
