// coverletter - Cover letter likhwao
module.exports = {
  name: 'coverletter',
  alias: ['cover'],
  category: 'ai',
  desc: 'Cover letter likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .cover <job + details>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a cover letter for: ' + query));
  },
};
