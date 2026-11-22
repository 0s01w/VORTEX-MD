// ebay - eBay search
module.exports = {
  name: 'ebay',
  alias: ['ebay'],
  category: 'search',
  desc: 'eBay search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .ebay <query>');
    await reply('🛒 eBay: https://www.ebay.com/sch/i.html?_nkw=' + encodeURIComponent(query));
  },
};
