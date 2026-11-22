// facebook - Download Facebook video
module.exports = {
  name: 'facebook',
  alias: ['fb', 'fbdl'],
  category: 'download',
  desc: 'Download Facebook video',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadFacebook } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .facebook <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadFacebook(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { video: buf, caption: res.title || 'Download Facebook video', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
