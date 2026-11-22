// ytsearch - Search YouTube videos
module.exports = {
  name: 'ytsearch',
  alias: ['yts'],
  category: 'download',
  desc: 'Search YouTube videos',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .ytsearch <query>');
    const { searchYouTube } = require('../../lib/downloader');
    const results = await searchYouTube(query);
    if (!results.length) return reply('❌ Kuch nahi mila.');
    let text = '🔍 *YouTube Search: ' + query + '*\n\n';
    results.forEach((v, i) => { text += (i+1) + '. ' + v.title + '\n' + v.url + '\n\n'; });
    await reply(text);
  },
};
