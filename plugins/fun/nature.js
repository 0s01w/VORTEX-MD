// nature - Nature image
module.exports = {
  name: 'nature',
  alias: ['natureimg'],
  category: 'fun',
  desc: 'Nature image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/nature');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Nature image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
