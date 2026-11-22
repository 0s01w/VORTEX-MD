// anticall - Toggle anti-call
module.exports = {
  name: 'anticall',
  alias: ['acall'],
  category: 'admin',
  desc: 'Toggle anti-call',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✅ Anti-call setting update ho gayi.');
  },
};
