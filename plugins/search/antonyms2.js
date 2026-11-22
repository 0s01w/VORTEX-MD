// antonyms2 - Antonyms dhoondo
module.exports = {
  name: 'antonyms2',
  alias: ['ant'],
  category: 'search',
  desc: 'Antonyms dhoondo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .antonyms2 <word>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.datamuse.com/words?rel_ant=' + encodeURIComponent(query) + '&max=10'); await reply('📚 Antonyms: ' + d.map(w => w.word).join(', ')); }
    catch { await reply('❌ Nahi mila.'); }
  },
};
