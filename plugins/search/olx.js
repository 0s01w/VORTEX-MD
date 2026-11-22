// olx - OLX search (Pakistan)
module.exports = {
  name: 'olx',
  alias: ['olx'],
  category: 'search',
  desc: 'OLX search (Pakistan)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .olx <query>');
    await reply('🛒 OLX: https://www.olx.com.pk/all?q=' + encodeURIComponent(query));
  },
};
