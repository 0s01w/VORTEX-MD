// truth - Truth dare - truth
module.exports = {
  name: 'truth',
  alias: ['truth'],
  category: 'fun',
  desc: 'Truth dare - truth',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Sach batao: Sab se bara jhooth jo tum ne bola?',
      'Sach batao: Tumhara sab se embarrassing moment?',
      'Sach batao: Agar tum millionaire hote to pehle kya karte?'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
