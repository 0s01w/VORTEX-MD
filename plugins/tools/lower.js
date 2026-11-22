// lower - Text lower karo
module.exports = {
  name: 'lower',
  alias: ['lower'],
  category: 'tools',
  desc: 'Text lower karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .lower <text>');
    await reply(query.toLowerCase());
  },
};
