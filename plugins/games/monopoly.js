// monopoly - Monopoly game
module.exports = {
  name: 'monopoly',
  alias: ['monopoly'],
  category: 'games',
  desc: 'Monopoly game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const n = Math.floor(Math.random() * 6) + 1;
    await reply('🎲 Monopoly dice: ' + n + '\nBoard pe aage badho!');
  },
};
