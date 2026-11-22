// puzzle - Puzzle solve karo
module.exports = {
  name: 'puzzle',
  alias: ['puzzle'],
  category: 'games',
  desc: 'Puzzle solve karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🧩 Puzzle: Ek aadmi ke 3 bete hain, har bete ke 2 bachay hain. Kul kitne?\nJawab .puzzle <number>');
  },
};
