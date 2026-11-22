// ytmp4 - YouTube to MP4
module.exports = {
  name: 'ytmp4',
  alias: ['ytmp4', 'ytmp4dl'],
  category: 'download',
  desc: 'YouTube to MP4',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadYouTube } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .ytmp4 <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadYouTube(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { video: buf, caption: res.title || 'YouTube to MP4', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
