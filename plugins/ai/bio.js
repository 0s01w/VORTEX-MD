// bio - Bio likhwao
module.exports = {
  name: 'bio',
  alias: ['bio'],
  category: 'ai',
  desc: 'Bio likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .bio <tumhare baray mein>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a short bio for: ' + query));
  },
};
