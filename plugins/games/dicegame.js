// dicegame - Dice game
module.exports = {
  name: 'dicegame',
  alias: ['dicegame'],
  category: 'games',
  desc: 'Dice game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const n = Math.floor(Math.random() * 6) + 1;
    await reply('🎲 Tumhara number: ' + n);
  },
};
