// onlyadmin - Toggle only-admin mode
module.exports = {
  name: 'onlyadmin',
  alias: ['oa'],
  category: 'admin',
  desc: 'Toggle only-admin mode',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.onlyAdmin = !g.onlyAdmin; require('../../lib/database').save();
    await reply('✅ Only-admin mode ' + (g.onlyAdmin ? 'ON' : 'OFF') + '.');
  },
};
