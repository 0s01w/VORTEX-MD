// antonym - Antonyms dhoondo
module.exports = {
  name: 'antonym',
  alias: ['antonym'],
  category: 'search',
  desc: 'Antonyms dhoondo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .antonym <word>');
    await reply('📚 Antonyms: https://www.thesaurus.com/browse/' + encodeURIComponent(query));
  },
};
