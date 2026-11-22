// roast - Roast karo
module.exports = {
  name: 'roast',
  alias: ['roasts'],
  category: 'fun',
  desc: 'Roast karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Tum itne boring ho ke paint dry hona bhi interesting lagta hai 😂',
      'Tumhara style dekh ke fashion designer ne bhi resign kar diya 😎',
      'Tum itne slow ho ke kal ka jawab aaj dete ho 🐌'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
