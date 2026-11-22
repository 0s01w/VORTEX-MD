// normalize - Audio normalize karo
module.exports = {
  name: 'normalize',
  alias: ['normalize'],
  category: 'media',
  desc: 'Audio normalize karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Normalize ho raha hai...');
  },
};
