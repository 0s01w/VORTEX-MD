// base64 - Base64 encode
module.exports = {
  name: 'base64',
  alias: ['b64'],
  category: 'tools',
  desc: 'Base64 encode',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .base64 <text>');
    await reply('🔤 ' + Buffer.from(query).toString('base64'));
  },
};
