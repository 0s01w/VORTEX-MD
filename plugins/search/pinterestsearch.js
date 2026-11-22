// pinterestsearch - Pinterest search
module.exports = {
  name: 'pinterestsearch',
  alias: ['pins'],
  category: 'search',
  desc: 'Pinterest search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .pinterestsearch <query>');
    await reply('📌 Pinterest: https://www.pinterest.com/search/pins/?q=' + encodeURIComponent(query));
  },
};
