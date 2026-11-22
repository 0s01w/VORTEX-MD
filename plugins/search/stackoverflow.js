// stackoverflow - StackOverflow search
module.exports = {
  name: 'stackoverflow',
  alias: ['so'],
  category: 'search',
  desc: 'StackOverflow search',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .stackoverflow <query>');
    await reply('📚 SO: https://stackoverflow.com/search?q=' + encodeURIComponent(query));
  },
};
