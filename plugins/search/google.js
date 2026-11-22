// google - Google search karo
module.exports = {
  name: 'google',
  alias: ['google'],
  category: 'search',
  desc: 'Google search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .google <query>');
    await reply('🔍 Google: https://www.google.com/search?q=' + encodeURIComponent(query));
  },
};
