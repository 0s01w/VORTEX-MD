// pitch - Pitch badlo
module.exports = {
  name: 'pitch',
  alias: ['pitch'],
  category: 'media',
  desc: 'Pitch badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Pitch badal raha hai...');
  },
};
