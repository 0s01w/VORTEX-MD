// shayari - Random Urdu shayari
module.exports = {
  name: 'shayari',
  alias: ['shayari'],
  category: 'fun',
  desc: 'Random Urdu shayari',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Dil mein armaan jagaya kar, waqt se pehle na aaya kar.",
      "Teri yaad aayi to dil ne kaha, kuch aur intezaar kar.",
      "Mohabbat mein nahi hai farq jeene aur marne ka."
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
