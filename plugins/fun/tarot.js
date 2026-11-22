// tarot - Tarot card padho
module.exports = {
  name: 'tarot',
  alias: ['tarot'],
  category: 'fun',
  desc: 'Tarot card padho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      '🃏 The Star - Tumhara future bright hai!',
      '🃏 The Moon - Kuch cheezain unclear hain, savdhan raho.',
      '🃏 The Sun - Khushi aur kamyabi tumhara intezaar kar rahi hai!'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
