// facebook2 - Facebook search
module.exports = {
  name: 'facebook2',
  alias: ['fbsearch'],
  category: 'search',
  desc: 'Facebook search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .facebook2 <query>');
    await reply('👍 Facebook: https://www.facebook.com/search/top?q=' + encodeURIComponent(query));
  },
};
