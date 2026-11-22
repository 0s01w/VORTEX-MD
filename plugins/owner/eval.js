// eval - Code run karo (owner only)
module.exports = {
  name: 'eval',
  alias: ['eval', 'exec'],
  category: 'owner',
  desc: 'Code run karo (owner only)',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .eval <code>');
    try { const result = eval(query); await reply('✅ ' + result); } catch (e) { await reply('❌ Error: ' + e.message); }
  },
};
