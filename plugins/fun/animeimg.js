// animeimg - Random anime image
module.exports = {
  name: 'animeimg',
  alias: ['animeimg'],
  category: 'fun',
  desc: 'Random anime image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/animeimg');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Random anime image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
