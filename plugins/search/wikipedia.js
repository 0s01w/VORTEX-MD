// wikipedia - Wikipedia pe search karo
module.exports = {
  name: 'wikipedia',
  alias: ['wiki'],
  category: 'search',
  desc: 'Wikipedia pe search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .wikipedia <topic>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(query)); await reply('📚 *' + d.title + '*\n\n' + (d.extract || 'No summary').slice(0, 1000) + '\n\n🔗 ' + d.content_urls?.desktop?.page); }
    catch { await reply('❌ Wikipedia pe nahi mila.'); }
  },
};
