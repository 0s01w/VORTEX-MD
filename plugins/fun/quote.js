// quote - Random quote
module.exports = {
  name: 'quote',
  alias: ['quotes'],
  category: 'fun',
  desc: 'Random quote',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Mehnat kabhi bekaar nahi jati, bas waqt lagta hai.",
      "Jo chala gaya, samjho woh kabhi tumhara tha hi nahi.",
      "Sapne woh nahi jo sote hue dekho, sapne woh hain jo sone na dein."
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
