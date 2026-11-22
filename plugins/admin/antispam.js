// antispam - Toggle anti-spam
module.exports = {
  name: 'antispam',
  alias: ['asp'],
  category: 'admin',
  desc: 'Toggle anti-spam',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.antispam = !g.antispam; require('../../lib/database').save();
    await reply('✅ Anti-spam ' + (g.antispam ? 'ON' : 'OFF') + ' kar diya.');
  },
};
