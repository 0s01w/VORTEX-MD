// riddlegame - Riddle game
module.exports = {
  name: 'riddlegame',
  alias: ['riddlegame'],
  category: 'games',
  desc: 'Riddle game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('❓ Pehli: Main bolti hoon lekin munh nahi hai. Main kya hoon?\nJawab .riddlegame <answer>');
  },
};
