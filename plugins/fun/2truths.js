// 2truths - 2 truths 1 lie
module.exports = {
  name: '2truths',
  alias: ['2truth'],
  category: 'fun',
  desc: '2 truths 1 lie',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      '2 sach, 1 jhooth batao! Main guess karunga 🤔'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
