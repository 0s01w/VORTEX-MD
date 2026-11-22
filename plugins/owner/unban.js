// unban - User unban karo
module.exports = {
  name: 'unban',
  alias: ['unban'],
  category: 'owner',
  desc: 'User unban karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .unban <number>');
    const db = require('../../lib/database');
    db.db.bannedUsers = db.db.bannedUsers.filter(u => u !== target);
    db.save();
    await reply('✅ @' + target.split('@')[0] + ' unban kar diya.');
  },
};
