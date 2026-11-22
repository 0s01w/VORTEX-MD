// quotesearch - Quote search karo
module.exports = {
  name: 'quotesearch',
  alias: ['quotesearch'],
  category: 'search',
  desc: 'Quote search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .quotesearch <topic>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.quotable.io/quotes?tags=' + encodeURIComponent(query)); await reply('💬 "' + d.results[0].content + '" - ' + d.results[0].author); }
    catch { await reply('❌ Quote nahi mila.'); }
  },
};
