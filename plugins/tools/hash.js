// hash - MD5 hash banao
module.exports = {
  name: 'hash',
  alias: ['md5'],
  category: 'tools',
  desc: 'MD5 hash banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .hash <text>');
    const crypto = require('crypto');
    await reply('🔐 MD5: ' + crypto.createHash('md5').update(query).digest('hex'));
  },
};
