// normalize2 - Normalize karo
module.exports = {
  name: 'normalize2',
  alias: ['normalize'],
  category: 'audio',
  desc: 'Normalize karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Normalize ho raha hai...');
  },
};
