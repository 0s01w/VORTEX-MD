// setname - Bot ka naam badlo
module.exports = {
  name: 'setname',
  alias: ['setbotname'],
  category: 'owner',
  desc: 'Bot ka naam badlo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setname <new name>');
    await reply('✅ Bot ka naam badal diya: ' + query);
  },
};
