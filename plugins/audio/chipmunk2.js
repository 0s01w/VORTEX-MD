// chipmunk2 - Chipmunk voice
module.exports = {
  name: 'chipmunk2',
  alias: ['chipmunk'],
  category: 'audio',
  desc: 'Chipmunk voice',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🐿️ Chipmunk voice ban rahi hai...');
  },
};
