// antibot - Toggle anti-bot
module.exports = {
  name: 'antibot',
  alias: ['ab'],
  category: 'admin',
  desc: 'Toggle anti-bot',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.antibot = !g.antibot; require('../../lib/database').save();
    await reply('✅ Anti-bot ' + (g.antibot ? 'ON' : 'OFF') + ' kar diya.');
  },
};
