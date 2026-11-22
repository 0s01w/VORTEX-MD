// ban - User ban karo
module.exports = {
  name: 'ban',
  alias: ['ban'],
  category: 'owner',
  desc: 'User ban karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .ban <number>');
    const db = require('../../lib/database');
    if (!db.db.bannedUsers.includes(target)) db.db.bannedUsers.push(target);
    db.save();
    await reply('🚫 @' + target.split('@')[0] + ' ban kar diya.');
  },
};
