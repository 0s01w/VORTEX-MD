// goodbye - Toggle goodbye message
module.exports = {
  name: 'goodbye',
  alias: ['bye'],
  category: 'admin',
  desc: 'Toggle goodbye message',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.goodbye = !g.goodbye; require('../../lib/database').save();
    await reply('✅ Goodbye ' + (g.goodbye ? 'ON' : 'OFF') + '.');
  },
};
