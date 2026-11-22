// higherlower - Higher or lower
module.exports = {
  name: 'higherlower',
  alias: ['hl'],
  category: 'games',
  desc: 'Higher or lower',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const num = Math.floor(Math.random() * 100) + 1;
    await reply('🎯 Number 1-100 mein hai! Guess karo: .hl <number>');
  },
};
