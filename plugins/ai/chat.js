// chat - AI chat
module.exports = {
  name: 'chat',
  alias: ['chat'],
  category: 'ai',
  desc: 'AI chat',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .chat <baat>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI(query, 'You are a friendly chatbot. Reply casually in Roman Urdu/English mix.'));
  },
};
