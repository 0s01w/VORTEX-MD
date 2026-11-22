// reddit - Reddit search
module.exports = {
  name: 'reddit',
  alias: ['reddit'],
  category: 'search',
  desc: 'Reddit search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .reddit <query>');
    await reply('🤖 Reddit: https://www.reddit.com/search/?q=' + encodeURIComponent(query));
  },
};
