// gujarati - Gujarati seekho
module.exports = {
  name: 'gujarati',
  alias: ['gujarati'],
  category: 'misc',
  desc: 'Gujarati seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇳 Gujarati: નમસ્તે (Namaste) - Hello!');
  },
};
