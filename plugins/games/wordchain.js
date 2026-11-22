// wordchain - Word chain game
module.exports = {
  name: 'wordchain',
  alias: ['wordchain'],
  category: 'games',
  desc: 'Word chain game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔤 Word chain shuru! Pehla word: *Apple*\nAb tum ek word batao jo e se shuru ho!');
  },
};
