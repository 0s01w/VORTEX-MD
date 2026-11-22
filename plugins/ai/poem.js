// poem - AI se nazm likhwao
module.exports = {
  name: 'poem',
  alias: ['poem'],
  category: 'ai',
  desc: 'AI se nazm likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .poem <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a short Urdu poem about: ' + query));
  },
};
