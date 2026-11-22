// tiktoksearch - TikTok search
module.exports = {
  name: 'tiktoksearch',
  alias: ['tts2'],
  category: 'search',
  desc: 'TikTok search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .tiktoksearch <query>');
    await reply('🎵 TikTok: https://www.tiktok.com/search?q=' + encodeURIComponent(query));
  },
};
