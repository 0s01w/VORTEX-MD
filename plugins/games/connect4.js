// connect4 - Connect 4 game
module.exports = {
  name: 'connect4',
  alias: ['connect4'],
  category: 'games',
  desc: 'Connect 4 game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔴 Connect 4: Pehli chal ke liye .connect4 <column 1-7>');
  },
};
