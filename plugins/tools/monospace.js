// monospace - Monospace text
module.exports = {
  name: 'monospace',
  alias: ['mono'],
  category: 'tools',
  desc: 'Monospace text',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .mono <text>');
    await reply('```' + query + '```');
  },
};
