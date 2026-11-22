// hashtag - Hashtags banao
module.exports = {
  name: 'hashtag',
  alias: ['hashtag'],
  category: 'ai',
  desc: 'Hashtags banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .hashtag <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Give 10 hashtags for: ' + query));
  },
};
