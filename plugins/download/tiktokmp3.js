// tiktokmp3 - TikTok to MP3
module.exports = {
  name: 'tiktokmp3',
  alias: ['ttmp3'],
  category: 'download',
  desc: 'TikTok to MP3',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadTikTok } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .tiktokmp3 <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadTikTok(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { audio: buf, caption: res.title || 'TikTok to MP3', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
