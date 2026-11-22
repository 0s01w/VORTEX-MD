// paraphrase - Text dobara likhwao
module.exports = {
  name: 'paraphrase',
  alias: ['paraphrase'],
  category: 'ai',
  desc: 'Text dobara likhwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .paraphrase <text>');
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Paraphrase this text: ' + query));
  },
};
