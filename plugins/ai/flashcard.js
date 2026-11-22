// flashcard - Flashcards banao
module.exports = {
  name: 'flashcard',
  alias: ['flashcard'],
  category: 'ai',
  desc: 'Flashcards banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .flashcard <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Make flashcards for: ' + query));
  },
};
