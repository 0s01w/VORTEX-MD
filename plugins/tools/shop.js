// shop - Coins ki shop
module.exports = {
  name: 'shop',
  alias: ['shop'],
  category: 'tools',
  desc: 'Coins ki shop',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🛒 *Shop*\n\n🎁 Premium (30 din): 500 coins\n🎨 Special sticker pack: 100 coins\n⭐ XP boost: 200 coins\n\nKharidne ke liye .buy <item> likho');
  },
};
