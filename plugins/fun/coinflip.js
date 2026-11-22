// coinflip - Coin flip karo
module.exports = {
  name: 'coinflip',
  alias: ['flip'],
  category: 'fun',
  desc: 'Coin flip karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      '🪙 Head! (Chit)',
      '🪙 Tail! (Pat)'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
