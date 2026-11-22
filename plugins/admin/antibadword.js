// antibadword - Toggle anti-badword
module.exports = {
  name: 'antibadword',
  alias: ['abw'],
  category: 'admin',
  desc: 'Toggle anti-badword',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const g = ctx.groupData; g.antibadword = !g.antibadword; require('../../lib/database').save();
    await reply('✅ Anti-badword ' + (g.antibadword ? 'ON' : 'OFF') + ' kar diya.');
  },
};
