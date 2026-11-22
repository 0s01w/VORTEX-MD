// mahjong - Mahjong tiles
module.exports = {
  name: 'mahjong',
  alias: ['mahjong'],
  category: 'games',
  desc: 'Mahjong tiles',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🀄 Mahjong tile mili! Agli chal karo.');
  },
};
