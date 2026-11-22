// turkish - Turkish seekho
module.exports = {
  name: 'turkish',
  alias: ['turkish'],
  category: 'misc',
  desc: 'Turkish seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇹🇷 Turkish: Merhaba - Hello!');
  },
};
