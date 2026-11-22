// islamic - Islamic info
module.exports = {
  name: 'islamic',
  alias: ['islamic'],
  category: 'misc',
  desc: 'Islamic info',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🕌 *Islamic*\n\n📿 Aaj ki namaz ke auqat ke liye Aladhan app use karo.\n📖 Quran: https://quran.com\n🤲 Allah tumhein kamyab kare!');
  },
};
