// meme - Random meme
module.exports = {
  name: 'meme',
  alias: ['memes'],
  category: 'fun',
  desc: 'Random meme',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Meme: Jab teacher kehte hain yeh exam mein aayega aur phir nahi aata",
      "Meme: Jab ammi kehti hain ghar aake batati hoon",
      "Meme: Jab WiFi band ho jaye aur sab ek dusre ko dekhne lag jayein"
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
