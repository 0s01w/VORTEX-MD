// ebook - Download ebook (link)
module.exports = {
  name: 'ebook',
  alias: ['ebook'],
  category: 'download',
  desc: 'Download ebook (link)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .ebook <link>');
    await reply('🔗 Link: ' + query + '\n\nYe link browser mein kholo download ke liye. Bot direct download ke liye upar wale commands use karo (.tiktok, .ytmp3, etc).');
  },
};
