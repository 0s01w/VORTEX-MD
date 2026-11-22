// japanese - Japanese seekho
module.exports = {
  name: 'japanese',
  alias: ['japanese'],
  category: 'misc',
  desc: 'Japanese seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇯🇵 Japanese: こんにちは (Konnichiwa) - Hello!');
  },
};
