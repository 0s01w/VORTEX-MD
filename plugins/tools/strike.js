// strike - Strikethrough text
module.exports = {
  name: 'strike',
  alias: ['strike'],
  category: 'tools',
  desc: 'Strikethrough text',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .strike <text>');
    await reply('~' + query + '~');
  },
};
