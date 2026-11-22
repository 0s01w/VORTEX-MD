// jokeai - AI se joke banwao
module.exports = {
  name: 'jokeai',
  alias: ['jokeai'],
  category: 'ai',
  desc: 'AI se joke banwao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { askAI } = require('../../lib/ai');
    await reply(await askAI('Tell a funny joke in Roman Urdu'));
  },
};
