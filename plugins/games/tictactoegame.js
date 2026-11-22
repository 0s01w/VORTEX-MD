// tictactoegame - Tic tac toe game
module.exports = {
  name: 'tictactoegame',
  alias: ['tttgame'],
  category: 'games',
  desc: 'Tic tac toe game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎮 Tic Tac Toe ready!\nBoard:\n_ | _ | _\n--+---+--\n_ | _ | _\n--+---+--\n_ | _ | _\nApni chal: .tttgame <1-9>');
  },
};
