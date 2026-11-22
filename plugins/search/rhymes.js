// rhymes - Rhyming words
module.exports = {
  name: 'rhymes',
  alias: ['rhymes'],
  category: 'search',
  desc: 'Rhyming words',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .rhymes <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.datamuse.com/words?rel_rhy=' + encodeURIComponent(query) + '&max=10'); await reply('🎵 Rhymes: ' + d.map(w => w.word).join(', ')); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
