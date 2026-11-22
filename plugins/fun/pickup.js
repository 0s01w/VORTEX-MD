// pickup - Pickup line
module.exports = {
  name: 'pickup',
  alias: ['pickup'],
  category: 'fun',
  desc: 'Pickup line',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Kya tum WiFi ho? Kyunki mujhe tum se connection feel ho raha hai 📶',
      'Tum Google ho? Kyunki tum mein sab kuch hai jo mujhe chahiye 🔍',
      'Tum chai ho? Kyunki tum ke baghair din adhoora hai ☕'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
