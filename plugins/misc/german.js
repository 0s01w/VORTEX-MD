// german - German seekho
module.exports = {
  name: 'german',
  alias: ['german'],
  category: 'misc',
  desc: 'German seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇩🇪 German: Hallo - Hello!');
  },
};
