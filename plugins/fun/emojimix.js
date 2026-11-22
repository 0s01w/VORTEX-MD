// emojimix - Emoji mix karo
module.exports = {
  name: 'emojimix',
  alias: ['emojimix'],
  category: 'fun',
  desc: 'Emoji mix karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .emojimix 😀+😂');
    await reply('😀 + 😂 = ' + query + '\n\nEmoji mix ho gaya! (demo)');
  },
};
