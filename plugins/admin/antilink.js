// antilink - Toggle anti-link in group
module.exports = {
  name: 'antilink',
  alias: ['al'],
  category: 'admin',
  desc: 'Toggle anti-link in group',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.antilink = !g.antilink; require('../../lib/database').save();
    await reply('✅ Anti-link ' + (g.antilink ? 'ON' : 'OFF') + ' kar diya.');
  },
};
