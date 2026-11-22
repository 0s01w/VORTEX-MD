// waifu - Random waifu image
module.exports = {
  name: 'waifu',
  alias: ['waifus'],
  category: 'fun',
  desc: 'Random waifu image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/waifu');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Random waifu image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
