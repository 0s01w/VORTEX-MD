// snake - Snake game info
module.exports = {
  name: 'snake',
  alias: ['snake'],
  category: 'games',
  desc: 'Snake game info',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🐍 Snake game: 1-100 board pe snake aur ladder!\nDice ke liye .snake likho');
  },
};
