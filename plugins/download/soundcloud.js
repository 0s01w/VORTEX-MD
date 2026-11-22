// soundcloud - Download SoundCloud track
module.exports = {
  name: 'soundcloud',
  alias: ['scdl'],
  category: 'download',
  desc: 'Download SoundCloud track',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadSoundCloud } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .soundcloud <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadSoundCloud(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { audio: buf, caption: res.title || 'Download SoundCloud track', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
