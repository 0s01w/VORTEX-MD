// nightcore2 - Nightcore banao
module.exports = {
  name: 'nightcore2',
  alias: ['nightcore'],
  category: 'audio',
  desc: 'Nightcore banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌙 Nightcore ban raha hai...');
  },
};
