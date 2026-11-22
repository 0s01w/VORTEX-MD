// unarchive - Chat unarchive karo
module.exports = {
  name: 'unarchive',
  alias: ['unarchive'],
  category: 'group',
  desc: 'Chat unarchive karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.chatModify(jid, 'archive', false);
    await reply('📦 Chat unarchive kar di.');
  },
};
