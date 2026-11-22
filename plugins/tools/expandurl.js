// expandurl - Short URL expand karo
module.exports = {
  name: 'expandurl',
  alias: ['expand'],
  category: 'tools',
  desc: 'Short URL expand karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .expandurl <link>');
    const axios = require('axios');
    try { const r = await axios.head(query, { maxRedirects: 0 }); await reply('🔗 Asli link: ' + (r.headers.location || 'Nahi mila')); }
    catch (e) { await reply('🔗 Asli link: ' + (e.response?.headers?.location || 'Nahi mila')); }
  },
};
