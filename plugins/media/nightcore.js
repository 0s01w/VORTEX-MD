// nightcore - Nightcore version banao
module.exports = {
  name: 'nightcore',
  alias: ['nightcore'],
  category: 'media',
  desc: 'Nightcore version banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌙 Nightcore ban raha hai...');
  },
};
