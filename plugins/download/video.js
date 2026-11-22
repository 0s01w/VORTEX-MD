// video - Download video from YouTube
module.exports = {
  name: 'video',
  alias: ['vid'],
  category: 'download',
  desc: 'Download video from YouTube',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { searchSong } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .video <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await searchSong(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { video: buf, caption: res.title || 'Download video from YouTube', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
