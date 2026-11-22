// quote2 - Quote banao
module.exports = {
  name: 'quote2',
  alias: ['quote'],
  category: 'tools',
  desc: 'Quote banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .quote <text>');
    await reply('> ' + query);
  },
};
