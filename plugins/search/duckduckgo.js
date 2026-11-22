// duckduckgo - DuckDuckGo search
module.exports = {
  name: 'duckduckgo',
  alias: ['ddg'],
  category: 'search',
  desc: 'DuckDuckGo search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .duckduckgo <query>');
    await reply('🔍 DDG: https://duckduckgo.com/?q=' + encodeURIComponent(query));
  },
};
