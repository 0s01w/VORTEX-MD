// mathquiz - Math quiz
module.exports = {
  name: 'mathquiz',
  alias: ['math'],
  category: 'games',
  desc: 'Math quiz',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const ans = a + b;
    const userAns = parseInt(args[0]);
    if (!userAns) return reply('Sawal: ' + a + ' + ' + b + ' = ?\nJawab ke liye .mathquiz <number> likho');
    await reply(userAns === ans ? '✅ Sahi jawab! ' + ans : '❌ Galat! Sahi jawab: ' + ans);
  },
};
