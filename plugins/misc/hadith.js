// hadith - Hadith sharif
module.exports = {
  name: 'hadith',
  alias: ['hadith'],
  category: 'misc',
  desc: 'Hadith sharif',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📜 Hadith: "Deen mein asani hai, aur jo deen ko mushkil banayega, deen us par ghalib aayega." (Bukhari)');
  },
};
