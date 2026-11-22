// joke - Random joke sunao
module.exports = {
  name: 'joke',
  alias: ['jokes'],
  category: 'fun',
  desc: 'Random joke sunao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Pappu doctor ke paas gaya: Doctor sahab, jab main sota hoon to bandar football khelte hain. Doctor: Ye dawai le lo, aaj raat se nahi hoga. Pappu: Kal se lunga, aaj final match hai! 😂',
      'Teacher: Batao, sab se purana janwar kaunsa hai? Student: Zebra! Teacher: Kyun? Student: Kyunki wo abhi bhi black and white hai! 😂',
      'Ek aadmi doctor ke paas gaya: Doctor sahab, bhoolne ki bimari hai. Doctor: Kab se hai? Aadmi: Kya kab se hai? 😂'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
