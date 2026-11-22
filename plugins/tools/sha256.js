// sha256 - SHA256 hash
module.exports = {
  name: 'sha256',
  alias: ['sha'],
  category: 'tools',
  desc: 'SHA256 hash',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .sha256 <text>');
    const crypto = require('crypto');
    await reply('🔐 SHA256: ' + crypto.createHash('sha256').update(query).digest('hex'));
  },
};
