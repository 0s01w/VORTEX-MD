// urdu - Urdu shayari
module.exports = {
  name: 'urdu',
  alias: ['urdu'],
  category: 'misc',
  desc: 'Urdu shayari',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const shayaris = ['Dil mein armaan jagaya kar, waqt se pehle na aaya kar.', 'Teri yaad aayi to dil ne kaha, kuch aur intezaar kar.', 'Mohabbat mein nahi hai farq jeene aur marne ka.'];
    await reply('📜 ' + shayaris[Math.floor(Math.random() * shayaris.length)]);
  },
};
