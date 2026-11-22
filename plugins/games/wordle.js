// wordle - Wordle game
module.exports = {
  name: 'wordle',
  alias: ['wordle'],
  category: 'games',
  desc: 'Wordle game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🟩 Wordle: 5-letter word guess karo!\nPehla guess: .wordle <word>');
  },
};
