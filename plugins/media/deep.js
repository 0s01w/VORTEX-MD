// deep - Deep voice banao
module.exports = {
  name: 'deep',
  alias: ['deep'],
  category: 'media',
  desc: 'Deep voice banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Deep voice ban rahi hai...');
  },
};
