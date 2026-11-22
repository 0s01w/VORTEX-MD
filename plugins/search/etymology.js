// etymology - Word ki history
module.exports = {
  name: 'etymology',
  alias: ['etymology'],
  category: 'search',
  desc: 'Word ki history',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .etymology <word>');
    await reply('📜 Etymology: https://www.etymonline.com/search?q=' + encodeURIComponent(query));
  },
};
