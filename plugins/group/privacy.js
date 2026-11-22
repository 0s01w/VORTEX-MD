// privacy - Privacy settings dekho
module.exports = {
  name: 'privacy',
  alias: ['privacy'],
  category: 'group',
  desc: 'Privacy settings dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔐 Privacy settings WhatsApp → Settings → Privacy mein dekho.');
  },
};
