// tiktokimg - TikTok photo slideshow
module.exports = {
  name: 'tiktokimg',
  alias: ['ttimg'],
  category: 'download',
  desc: 'TikTok photo slideshow',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadTikTok } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .tiktokimg <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadTikTok(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { image: buf, caption: res.title || 'TikTok photo slideshow', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
