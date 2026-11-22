// war - Card war game
module.exports = {
  name: 'war',
  alias: ['war'],
  category: 'games',
  desc: 'Card war game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const you = Math.floor(Math.random() * 13) + 1;
    const bot = Math.floor(Math.random() * 13) + 1;
    await reply('🃏 Tum: ' + you + ' vs Bot: ' + bot + '\n' + (you > bot ? '🎉 Tum jeet gaye!' : you === bot ? '🤝 Draw!' : '😢 Bot jeet gaya!'));
  },
};
