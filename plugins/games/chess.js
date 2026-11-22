// chess - Chess game info
module.exports = {
  name: 'chess',
  alias: ['chess'],
  category: 'games',
  desc: 'Chess game info',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('♟️ Chess shuru karne ke liye opponent ko tag karo!\nBot tumhara opponent banega. (Demo mode)');
  },
};
