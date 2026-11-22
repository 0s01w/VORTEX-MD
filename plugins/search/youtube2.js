// youtube2 - YouTube search
module.exports = {
  name: 'youtube2',
  alias: ['yt2'],
  category: 'search',
  desc: 'YouTube search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .youtube2 <query>');
    await reply('▶️ YouTube: https://www.youtube.com/results?search_query=' + encodeURIComponent(query));
  },
};
