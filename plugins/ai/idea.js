// idea - AI se ideas lo
module.exports = {
  name: 'idea',
  alias: ['idea'],
  category: 'ai',
  desc: 'AI se ideas lo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .idea <topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Give 5 creative ideas for: ' + query));
  },
};
