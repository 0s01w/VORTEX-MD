// guess - Number guess game
module.exports = {
  name: 'guess',
  alias: ['guess'],
  category: 'games',
  desc: 'Number guess game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const num = Math.floor(Math.random() * 10) + 1;
    const guess = parseInt(args[0]);
    if (!guess) return reply('Usage: .guess <1-10>');
    await reply(guess === num ? '🎉 Sahi jawab! Number tha ' + num : '❌ Galat! Number tha ' + num + '. Dobara try karo!');
  },
};
