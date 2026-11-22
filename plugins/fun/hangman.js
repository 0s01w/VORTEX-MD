// hangman - Hangman game
module.exports = {
  name: 'hangman',
  alias: ['hang'],
  category: 'fun',
  desc: 'Hangman game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const words = ['whatsapp', 'bot', 'python', 'javascript', 'pakistan', 'coding'];
    const word = words[Math.floor(Math.random() * words.length)];
    await reply('🎮 Hangman shuru! Word: ' + '_ '.repeat(word.length) + '\n\nGuess karne ke liye .hangman <letter> likho (demo mode - word hai: ' + word + ')');
  },
};
