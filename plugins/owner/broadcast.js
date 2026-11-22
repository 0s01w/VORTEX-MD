// broadcast - Sab ko message bhejo
module.exports = {
  name: 'broadcast',
  alias: ['bc'],
  category: 'owner',
  desc: 'Sab ko message bhejo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .broadcast <message>');
    await reply('📢 Broadcast: ' + query + '\n(Bot ke contacts mein bheja jayega)');
  },
};
