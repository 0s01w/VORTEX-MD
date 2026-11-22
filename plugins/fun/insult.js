// insult - Funny roast (friendly)
module.exports = {
  name: 'insult',
  alias: ['roast'],
  category: 'fun',
  desc: 'Funny roast (friendly)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Tum itne slow ho ke snail ne bhi overtake kar liya!",
      "Tumhara WiFi bhi tum se tez hai!",
      "Tum itne purane ho ke dinosaur tumhein uncle kehta tha!"
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
