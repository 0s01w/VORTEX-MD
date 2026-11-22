// instagramsearch - Instagram search
module.exports = {
  name: 'instagramsearch',
  alias: ['igs2'],
  category: 'search',
  desc: 'Instagram search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .instagramsearch <query>');
    await reply('📸 Instagram: https://www.instagram.com/explore/search/keyword/?q=' + encodeURIComponent(query));
  },
};
