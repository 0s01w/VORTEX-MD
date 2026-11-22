// thesaurus - Synonyms dhoondo
module.exports = {
  name: 'thesaurus',
  alias: ['thesaurus'],
  category: 'search',
  desc: 'Synonyms dhoondo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .thesaurus <word>');
    await reply('📚 Synonyms ke liye: https://www.thesaurus.com/browse/' + encodeURIComponent(query));
  },
};
