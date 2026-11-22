// mono - Mono banao
module.exports = {
  name: 'mono',
  alias: ['monoaudio'],
  category: 'media',
  desc: 'Mono banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎧 Mono ho raha hai...');
  },
};
