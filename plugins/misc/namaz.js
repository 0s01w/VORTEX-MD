// namaz - Namaz timing
module.exports = {
  name: 'namaz',
  alias: ['namaz'],
  category: 'misc',
  desc: 'Namaz timing',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🕌 Namaz timing ke liye: https://aladhan.com\nApna shehar select karo.');
  },
};
