// weather - Mausam check karo
module.exports = {
  name: 'weather',
  alias: ['weather'],
  category: 'tools',
  desc: 'Mausam check karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .weather <shehar>');
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://wttr.in/' + encodeURIComponent(query) + '?format=3'); await reply('🌤️ ' + d); }
    catch { await reply('❌ Mausam nahi mila.'); }
  },
};
