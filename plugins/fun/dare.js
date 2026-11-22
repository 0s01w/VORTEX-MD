// dare - Truth dare - dare
module.exports = {
  name: 'dare',
  alias: ['dares'],
  category: 'fun',
  desc: 'Truth dare - dare',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Dare: Agle 10 message tak har baat mein bhai lagao!",
      "Dare: Apni profile pic 1 ghante ke liye cartoon wali lagao!",
      "Dare: Group mein ek shayari sunao!"
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
