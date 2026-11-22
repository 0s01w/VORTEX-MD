// chinese - Chinese seekho
module.exports = {
  name: 'chinese',
  alias: ['chinese'],
  category: 'misc',
  desc: 'Chinese seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇨🇳 Chinese: 你好 (Ni hao) - Hello!');
  },
};
