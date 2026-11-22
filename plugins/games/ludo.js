// ludo - Ludo game
module.exports = {
  name: 'ludo',
  alias: ['ludo'],
  category: 'games',
  desc: 'Ludo game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const n = Math.floor(Math.random() * 6) + 1;
    await reply('🎲 Ludo dice: ' + n + '\n' + (n === 6 ? '🎉 6 aaya! Ek aur turn!' : 'Chal chalo!'));
  },
};
