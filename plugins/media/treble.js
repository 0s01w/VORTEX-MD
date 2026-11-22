// treble - Audio treble boost karo
module.exports = {
  name: 'treble',
  alias: ['treble'],
  category: 'media',
  desc: 'Audio treble boost karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Treble boost ho raha hai...');
  },
};
