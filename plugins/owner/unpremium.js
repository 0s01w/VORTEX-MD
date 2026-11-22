// unpremium - Premium khatam karo
module.exports = {
  name: 'unpremium',
  alias: ['unpremium'],
  category: 'owner',
  desc: 'Premium khatam karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .unpremium <number>');
    const db = require('../../lib/database');
    delete db.db.premium[target];
    db.save();
    await reply('✅ Premium khatam kar diya.');
  },
};
