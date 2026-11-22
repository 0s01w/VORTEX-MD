// base64d - Base64 decode
module.exports = {
  name: 'base64d',
  alias: ['b64d', 'decode'],
  category: 'tools',
  desc: 'Base64 decode',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .base64d <text>');
    try { await reply('🔤 ' + Buffer.from(query, 'base64').toString()); } catch { await reply('❌ Galat base64!'); }
  },
};
