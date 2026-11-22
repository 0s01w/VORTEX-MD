// crossword - Crossword puzzle
module.exports = {
  name: 'crossword',
  alias: ['crossword'],
  category: 'games',
  desc: 'Crossword puzzle',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📝 Crossword: 1-Across: Pakistan ka capital (9 letters)');
  },
};
