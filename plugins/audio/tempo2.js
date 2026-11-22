// tempo2 - Tempo badlo
module.exports = {
  name: 'tempo2',
  alias: ['tempo'],
  category: 'audio',
  desc: 'Tempo badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎵 Tempo badal raha hai...');
  },
};
