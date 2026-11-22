// hangmangame - Hangman game
module.exports = {
  name: 'hangmangame',
  alias: ['hangmangame'],
  category: 'games',
  desc: 'Hangman game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎮 Hangman: Word guess karo!\nPehla hint: Ye ek animal hai 🐘');
  },
};
