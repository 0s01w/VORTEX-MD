// quizgame - Quiz game
module.exports = {
  name: 'quizgame',
  alias: ['quizgame'],
  category: 'games',
  desc: 'Quiz game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🧠 Quiz: Duniya ka sab se lamba nadi?\nA) Nile B) Amazon C) Indus');
  },
};
