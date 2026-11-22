// italic - Italic text banao
module.exports = {
  name: 'italic',
  alias: ['italic'],
  category: 'tools',
  desc: 'Italic text banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .italic <text>');
    await reply('_' + query + '_');
  },
};
