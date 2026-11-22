// telugu - Telugu seekho
module.exports = {
  name: 'telugu',
  alias: ['telugu'],
  category: 'misc',
  desc: 'Telugu seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇳 Telugu: నమస్కారం (Namaskaram) - Hello!');
  },
};
