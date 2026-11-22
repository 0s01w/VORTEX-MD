// email - Email likhwao
module.exports = {
  name: 'email',
  alias: ['email'],
  category: 'ai',
  desc: 'Email likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .email <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a professional email about: ' + query));
  },
};
