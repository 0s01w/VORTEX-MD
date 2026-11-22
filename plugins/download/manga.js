// manga - Download manga chapter
module.exports = {
  name: 'manga',
  alias: ['manga'],
  category: 'download',
  desc: 'Download manga chapter',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .manga <link>');
    await reply('🔗 Link: ' + query + '\n\nYe link browser mein kholo download ke liye. Bot direct download ke liye upar wale commands use karo (.tiktok, .ytmp3, etc).');
  },
};
