// twitter2 - Twitter/X search
module.exports = {
  name: 'twitter2',
  alias: ['twsearch'],
  category: 'search',
  desc: 'Twitter/X search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .twitter2 <query>');
    await reply('🐦 X: https://x.com/search?q=' + encodeURIComponent(query));
  },
};
