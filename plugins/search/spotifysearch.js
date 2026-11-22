// spotifysearch - Spotify search
module.exports = {
  name: 'spotifysearch',
  alias: ['sps'],
  category: 'search',
  desc: 'Spotify search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .spotifysearch <query>');
    await reply('🎵 Spotify: https://open.spotify.com/search/' + encodeURIComponent(query));
  },
};
