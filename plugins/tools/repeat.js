// repeat - Text repeat karo
module.exports = {
  name: 'repeat',
  alias: ['repeat'],
  category: 'tools',
  desc: 'Text repeat karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .repeat <text>');
    await reply((query + ' ').repeat(3));
  },
};
