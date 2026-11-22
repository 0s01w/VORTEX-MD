// jokesearch - Joke search karo
module.exports = {
  name: 'jokesearch',
  alias: ['jokesearch'],
  category: 'search',
  desc: 'Joke search karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://icanhazdadjoke.com/'); await reply('😂 ' + d.joke); }
    catch { await reply('😂 Joke: Pappu doctor ke paas gaya...'); }
  },
};
