// checkers - Checkers game
module.exports = {
  name: 'checkers',
  alias: ['checkers'],
  category: 'games',
  desc: 'Checkers game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('⚫ Checkers ready! Apni chal batao.');
  },
};
