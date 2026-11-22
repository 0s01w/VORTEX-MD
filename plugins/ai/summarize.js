// summarize - Text summarize karo
module.exports = {
  name: 'summarize',
  alias: ['summary'],
  category: 'ai',
  desc: 'Text summarize karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { getQuotedText } = require('../../lib/myfunc');
    const text = query || getQuotedText(ctx.msg);
    if (!text) return reply('Usage: .summarize <text> ya kisi message ko reply karo');
    const { summarizeText } = require('../../lib/ai');
    await reply(await summarizeText(text));
  },
};
