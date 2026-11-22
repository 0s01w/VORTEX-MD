// dark - Dark aesthetic image
module.exports = {
  name: 'dark',
  alias: ['darkimg'],
  category: 'fun',
  desc: 'Dark aesthetic image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/dark');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Dark aesthetic image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
