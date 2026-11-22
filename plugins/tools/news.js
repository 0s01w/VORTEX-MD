// news - Aaj ki khabrein
module.exports = {
  name: 'news',
  alias: ['news'],
  category: 'tools',
  desc: 'Aaj ki khabrein',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://newsapi.org/v2/top-headlines?country=pk&apiKey=demo')); await reply('📰 Khabrein load ho rahi hain...'); }
    catch { await reply('📰 Aaj ki khabrein: Pakistan mein nayi tech policy aayi hai! (demo)'); }
  },
};
