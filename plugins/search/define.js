// define - Word define karo
module.exports = {
  name: 'define',
  alias: ['define'],
  category: 'search',
  desc: 'Word define karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .define <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(query)); await reply('📖 ' + d[0].meanings[0].definitions[0].definition); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
