// coin - Coin game - heads/tails
module.exports = {
  name: 'coin',
  alias: ['coin'],
  category: 'games',
  desc: 'Coin game - heads/tails',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const c = Math.random() > 0.5 ? 'Heads' : 'Tails';
    await reply('🪙 Coin: ' + c);
  },
};
