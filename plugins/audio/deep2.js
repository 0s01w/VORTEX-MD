// deep2 - Deep voice
module.exports = {
  name: 'deep2',
  alias: ['deep'],
  category: 'audio',
  desc: 'Deep voice',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Deep voice ban rahi hai...');
  },
};
