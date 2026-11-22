// dictionary - Word ka matlab
module.exports = {
  name: 'dictionary',
  alias: ['dict'],
  category: 'search',
  desc: 'Word ka matlab',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .dictionary <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(query)); await reply('📖 *' + query + '*\n' + d[0].meanings[0].definitions[0].definition); }
    catch { await reply('❌ Word nahi mila.'); }
  },
};
