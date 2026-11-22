// storyai - AI se kahani likhwao
module.exports = {
  name: 'storyai',
  alias: ['storyai'],
  category: 'ai',
  desc: 'AI se kahani likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .storyai <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a short story about: ' + query));
  },
};
