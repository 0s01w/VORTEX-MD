// resume - AI se resume banao
module.exports = {
  name: 'resume',
  alias: ['resume'],
  category: 'ai',
  desc: 'AI se resume banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .resume <tumhari details>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Make a professional resume from: ' + query));
  },
};
