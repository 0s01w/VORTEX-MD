// unblock - User unblock karo
module.exports = {
  name: 'unblock',
  alias: ['unblock'],
  category: 'group',
  desc: 'User unblock karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .unblock <number>');
    await sock.updateBlockStatus(target, 'unblock');
    await reply('✅ Unblock kar diya.');
  },
};
