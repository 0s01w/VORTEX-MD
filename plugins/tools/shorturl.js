// shorturl - URL short karo
module.exports = {
  name: 'shorturl',
  alias: ['short'],
  category: 'tools',
  desc: 'URL short karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .shorturl <link>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://is.gd/create.php?format=simple&url=' + encodeURIComponent(query)); await reply('🔗 Short: ' + d); }
    catch { await reply('❌ Short nahi ho saka.'); }
  },
};
