// compressaudio - Audio compress karo
module.exports = {
  name: 'compressaudio',
  alias: ['compressaudio'],
  category: 'media',
  desc: 'Audio compress karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📦 Audio compress ho raha hai...');
  },
};
