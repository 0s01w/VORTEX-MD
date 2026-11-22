// wallpaperimg - Wallpaper image
module.exports = {
  name: 'wallpaperimg',
  alias: ['wpimg'],
  category: 'fun',
  desc: 'Wallpaper image',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.waifu.pics/sfw/wallpaperimg');
      await sock.sendMessage(jid, { image: { url: data.url }, caption: 'Wallpaper image' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
