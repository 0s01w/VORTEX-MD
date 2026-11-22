// mp3 - Convert video to MP3
module.exports = {
  name: 'mp3',
  alias: ['mp3'],
  category: 'download',
  desc: 'Convert video to MP3',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { searchSong } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .mp3 <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await searchSong(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { audio: buf, caption: res.title || 'Convert video to MP3', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
