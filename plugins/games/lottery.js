// lottery - Lottery ticket
module.exports = {
  name: 'lottery',
  alias: ['lotto'],
  category: 'games',
  desc: 'Lottery ticket',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const num = Math.floor(Math.random() * 1000) + 1;
    await reply('🎟️ Tumhara lottery number: ' + num + '\nKal result aayega!');
  },
};
