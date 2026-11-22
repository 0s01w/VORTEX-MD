// upper - Text UPPER karo
module.exports = {
  name: 'upper',
  alias: ['upper'],
  category: 'tools',
  desc: 'Text UPPER karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .upper <text>');
    await reply(query.toUpperCase());
  },
};
