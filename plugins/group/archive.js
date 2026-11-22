// archive - Chat archive karo
module.exports = {
  name: 'archive',
  alias: ['archive'],
  category: 'group',
  desc: 'Chat archive karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.chatModify(jid, 'archive', true);
    await reply('📦 Chat archive kar di.');
  },
};
