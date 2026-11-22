// daraz - Daraz search (Pakistan)
module.exports = {
  name: 'daraz',
  alias: ['daraz'],
  category: 'search',
  desc: 'Daraz search (Pakistan)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .daraz <query>');
    await reply('🛒 Daraz: https://www.daraz.pk/catalog/?q=' + encodeURIComponent(query));
  },
};
