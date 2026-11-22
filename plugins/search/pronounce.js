// pronounce - Word ka pronunciation
module.exports = {
  name: 'pronounce',
  alias: ['pronounce'],
  category: 'search',
  desc: 'Word ka pronunciation',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .pronounce <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(query)); await reply('🔊 Pronunciation: ' + (d[0].phonetic || 'N/A')); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
