// poll - Poll banao
module.exports = {
  name: 'poll',
  alias: ['poll'],
  category: 'group',
  desc: 'Poll banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .poll <sawal> | <option1> | <option2>');
    const parts = query.split('|').map(s => s.trim());
    if (parts.length < 3) return reply('Usage: .poll Kya pasand hai? | Chai | Coffee');
    await sock.sendMessage(jid, { poll: { name: parts[0], values: parts.slice(1), selectableCount: 1 } });
  },
};
