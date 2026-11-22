// pitch2 - Pitch badlo
module.exports = {
  name: 'pitch2',
  alias: ['pitch'],
  category: 'audio',
  desc: 'Pitch badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Pitch badal raha hai...');
  },
};
