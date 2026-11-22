// unbangroup - Group unban karo
module.exports = {
  name: 'unbangroup',
  alias: ['unbangroup'],
  category: 'owner',
  desc: 'Group unban karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const db = require('../../lib/database');
    db.db.bannedGroups = db.db.bannedGroups.filter(g => g !== jid);
    db.save();
    await reply('✅ Group unban kar diya.');
  },
};
