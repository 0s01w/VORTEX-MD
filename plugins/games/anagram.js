// anagram - Anagram solve
module.exports = {
  name: 'anagram',
  alias: ['anagram'],
  category: 'games',
  desc: 'Anagram solve',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔤 Anagram: *tca*\nIs se kya banta hai? .anagram <word>');
  },
};
