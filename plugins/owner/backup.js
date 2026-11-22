// backup - Database backup lo
module.exports = {
  name: 'backup',
  alias: ['backup'],
  category: 'owner',
  desc: 'Database backup lo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const fs = require('fs');
    const data = fs.readFileSync('./data/database.json', 'utf8');
    await sock.sendMessage(jid, { document: Buffer.from(data), fileName: 'backup.json', caption: '💾 Database backup' });
  },
};
