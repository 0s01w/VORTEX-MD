// marathi - Marathi seekho
module.exports = {
  name: 'marathi',
  alias: ['marathi'],
  category: 'misc',
  desc: 'Marathi seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇳 Marathi: नमस्कार (Namaskar) - Hello!');
  },
};
