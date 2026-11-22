// example - Word ka example
module.exports = {
  name: 'example',
  alias: ['example'],
  category: 'search',
  desc: 'Word ka example',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .example <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(query)); await reply('📝 Example: ' + (d[0].meanings[0].definitions[0].example || 'No example')); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
