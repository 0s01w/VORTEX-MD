// bangroup - Group ban karo
module.exports = {
  name: 'bangroup',
  alias: ['bangroup'],
  category: 'owner',
  desc: 'Group ban karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!isGroup) return reply('Sirf group mein chalega.');
    const db = require('../../lib/database');
    if (!db.db.bannedGroups.includes(jid)) db.db.bannedGroups.push(jid);
    db.save();
    await reply('🚫 Ye group ban kar diya.');
  },
};
