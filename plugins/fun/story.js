// story - Choti si kahani
module.exports = {
  name: 'story',
  alias: ['stories'],
  category: 'fun',
  desc: 'Choti si kahani',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Ek tha raja, uski rani... aur kahani khatam!",
      "Ek din Pappu school gaya, teacher ne poocha kal kyun nahi aaye? Pappu: Gir gaya tha aur lag gayi thi. Teacher: Kahan gir gaye the? Pappu: Neend mein bistar pe!"
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
