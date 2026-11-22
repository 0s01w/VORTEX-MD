// dice - Dice roll karo
module.exports = {
  name: 'dice',
  alias: ['roll'],
  category: 'fun',
  desc: 'Dice roll karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const n = Math.floor(Math.random() * 6) + 1;
    await reply('🎲 Dice: ' + n + ' ' + '⚀⚁⚂⚃⚄⚅⚅'.split('')[n-1]);
  },
};
