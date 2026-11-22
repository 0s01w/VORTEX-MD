// tictactoe - Tic Tac Toe game
module.exports = {
  name: 'tictactoe',
  alias: ['ttt'],
  category: 'fun',
  desc: 'Tic Tac Toe game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎮 Tic Tac Toe:\n\n1 | 2 | 3\n--+---+--\n4 | 5 | 6\n--+---+--\n7 | 8 | 9\n\nApni chal ke liye .tictactoe <number> likho (demo). Bot X hai, tum O ho!');
  },
};
