// baccarat - Baccarat game
module.exports = {
  name: 'baccarat',
  alias: ['baccarat'],
  category: 'games',
  desc: 'Baccarat game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🃏 Baccarat: Player vs Banker!\nApna bet ke liye .baccarat <amount> likho');
  },
};
