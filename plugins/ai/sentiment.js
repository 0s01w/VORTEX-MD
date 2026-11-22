// sentiment - Sentiment check karo
module.exports = {
  name: 'sentiment',
  alias: ['sentiment'],
  category: 'ai',
  desc: 'Sentiment check karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .sentiment <text>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Analyze sentiment (positive/negative/neutral) of: ' + query));
  },
};
