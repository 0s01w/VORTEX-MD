// brainstorm - Brainstorm karo
module.exports = {
  name: 'brainstorm',
  alias: ['brainstorm'],
  category: 'ai',
  desc: 'Brainstorm karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .brainstorm <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Brainstorm ideas for: ' + query));
  },
};
