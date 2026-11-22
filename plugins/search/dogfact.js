// dogfact - Dog fact
module.exports = {
  name: 'dogfact',
  alias: ['dogfact'],
  category: 'search',
  desc: 'Dog fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://dogapi.dog/api/v2/facts'); await reply('🐶 ' + d.facts[0]); }
    catch { await reply('🐶 Dogs insaanon ke sab se achay dost hain!'); }
  },
};
