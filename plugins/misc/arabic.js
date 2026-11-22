// arabic - Arabic seekho
module.exports = {
  name: 'arabic',
  alias: ['arabic'],
  category: 'misc',
  desc: 'Arabic seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇸🇦 Arabic: السلام عليكم - Assalam-o-Alaikum!');
  },
};
