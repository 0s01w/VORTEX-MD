// caption - Caption likhwao
module.exports = {
  name: 'caption',
  alias: ['caption'],
  category: 'ai',
  desc: 'Caption likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .caption <photo topic>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Write 3 captions for a photo about: ' + query));
  },
};
