// neko - Random neko image
module.exports = {
  name: 'neko',
  alias: ['nekos'],
  category: 'fun',
  desc: 'Random neko image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/neko');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Random neko image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
