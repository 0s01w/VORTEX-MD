// tempo - Tempo badlo
module.exports = {
  name: 'tempo',
  alias: ['tempo'],
  category: 'media',
  desc: 'Tempo badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Tempo badal raha hai...');
  },
};
