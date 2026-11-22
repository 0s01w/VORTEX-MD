// bold - Bold text banao
module.exports = {
  name: 'bold',
  alias: ['bold'],
  category: 'tools',
  desc: 'Bold text banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .bold <text>');
    await reply('*' + query + '*');
  },
};
