// blocklist - Block list dekho
module.exports = {
  name: 'blocklist',
  alias: ['blocklist'],
  category: 'group',
  desc: 'Block list dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const list = await sock.fetchPrivacySettings().catch(() => null);
    await reply('🚫 Block list check karo WhatsApp settings mein.');
  },
};
