// catfact - Cat fact
module.exports = {
  name: 'catfact',
  alias: ['catfact'],
  category: 'search',
  desc: 'Cat fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://catfact.ninja/fact'); await reply('🐱 ' + d.fact); }
    catch { await reply('🐱 Cats ke 9 lives hote hain!'); }
  },
};
