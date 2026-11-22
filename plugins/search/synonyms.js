// synonyms - Synonyms dhoondo
module.exports = {
  name: 'synonyms',
  alias: ['syn'],
  category: 'search',
  desc: 'Synonyms dhoondo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .synonyms <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.datamuse.com/words?rel_syn=' + encodeURIComponent(query) + '&max=10'); await reply('📚 Synonyms: ' + d.map(w => w.word).join(', ')); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
