// githubsearch - GitHub pe search karo
module.exports = {
  name: 'githubsearch',
  alias: ['gh'],
  category: 'search',
  desc: 'GitHub pe search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .githubsearch <query>');
    await reply('🐙 GitHub: https://github.com/search?q=' + encodeURIComponent(query));
  },
};
