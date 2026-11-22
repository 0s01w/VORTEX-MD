// welcome - Toggle welcome message
module.exports = {
  name: 'welcome',
  alias: ['wel'],
  category: 'admin',
  desc: 'Toggle welcome message',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.welcome = !g.welcome; require('../../lib/database').save();
    await reply('✅ Welcome ' + (g.welcome ? 'ON' : 'OFF') + '.');
  },
};
