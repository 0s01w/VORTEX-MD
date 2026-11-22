// quizai - AI se quiz banao
module.exports = {
  name: 'quizai',
  alias: ['quizai'],
  category: 'ai',
  desc: 'AI se quiz banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .quizai <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Make 3 quiz questions with answers about: ' + query));
  },
};
