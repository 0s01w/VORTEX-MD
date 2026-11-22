// twitter - Download Twitter/X video
module.exports = {
  name: 'twitter',
  alias: ['tw', 'xdl'],
  category: 'download',
  desc: 'Download Twitter/X video',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { downloadTwitter } = require('../../lib/downloader');
    if (!query && !args[0]) return reply('Usage: .twitter <link>');
    const url = args[0] || query;
    await reply('⏳ Download ho raha hai...');
    try {
      const res = await downloadTwitter(url);
      if (!res.url) return reply('❌ Link se kuch nahi mila.');
      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { video: buf, caption: res.title || 'Download Twitter/X video', fileName: 'download' }, { quoted: msg });
    } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
