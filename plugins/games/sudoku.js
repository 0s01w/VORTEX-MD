// sudoku - Sudoku puzzle
module.exports = {
  name: 'sudoku',
  alias: ['sudoku'],
  category: 'games',
  desc: 'Sudoku puzzle',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔢 Sudoku:\n5 . . | . 3 . | . . 1\n. 2 . | . . 4 | . . .\n. . . | 1 . . | . 2 .\n\nHal ke liye .sudoku <number> likho');
  },
};
