// write - AI se likhwao (essay, letter)
module.exports = {
  name: 'write',
  alias: ['write'],
  category: 'ai',
  desc: 'AI se likhwao (essay, letter)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .write <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write a short piece on: ' + query));
  },
};
