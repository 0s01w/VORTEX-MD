// stats - Bot stats dikhao
module.exports = {
  name: 'stats',
  alias: ['stats'],
  category: 'owner',
  desc: 'Bot stats dikhao',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const db = require('../../lib/database');
    const loader = require('../../handler/loader');
    await reply('📊 *Stats*\n🤖 Commands: ' + loader.getAllCommands().length + '\n💬 Messages: ' + db.db.stats.totalMessages + '\n⚡ Commands used: ' + db.db.stats.totalCommands + '\n👤 Users: ' + Object.keys(db.db.users).length + '\n👥 Groups: ' + Object.keys(db.db.groups).length + '\n⏱️ Uptime: ' + Math.floor(process.uptime()) + 's');
  },
};
