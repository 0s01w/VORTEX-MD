// bing - Bing search karo
module.exports = {
  name: 'bing',
  alias: ['bing'],
  category: 'search',
  desc: 'Bing search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .bing <query>');
    await reply('🔍 Bing: https://www.bing.com/search?q=' + encodeURIComponent(query));
  },
};
