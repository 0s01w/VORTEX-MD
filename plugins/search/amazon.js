// amazon - Amazon search
module.exports = {
  name: 'amazon',
  alias: ['amazon'],
  category: 'search',
  desc: 'Amazon search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .amazon <query>');
    await reply('🛒 Amazon: https://www.amazon.com/s?k=' + encodeURIComponent(query));
  },
};
