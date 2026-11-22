// premium - User ko premium do
module.exports = {
  name: 'premium',
  alias: ['premium'],
  category: 'owner',
  desc: 'User ko premium do',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    const days = parseInt(args[1]) || 30;
    if (!target) return reply('Usage: .premium <number> <days>');
    const db = require('../../lib/database');
    db.db.premium[target] = Date.now() + days * 86400000;
    db.save();
    await reply('👑 @' + target.split('@')[0] + ' ko ' + days + ' din premium mil gaya!');
  },
};
