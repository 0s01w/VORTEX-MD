// clue - Clue game
module.exports = {
  name: 'clue',
  alias: ['clue'],
  category: 'games',
  desc: 'Clue game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔍 Clue: Kaun, kahan, kis hathiyar se?\nApna guess batao!');
  },
};
