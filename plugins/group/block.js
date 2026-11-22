// block - User block karo
module.exports = {
  name: 'block',
  alias: ['block'],
  category: 'group',
  desc: 'User block karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : null;
    if (!target) return reply('Usage: .block <number>');
    await sock.updateBlockStatus(target, 'block');
    await reply('🚫 Block kar diya.');
  },
};
