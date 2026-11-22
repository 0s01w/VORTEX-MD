// mutechat - Chat mute karo
module.exports = {
  name: 'mutechat',
  alias: ['mutechat'],
  category: 'group',
  desc: 'Chat mute karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.chatModify(jid, 'mute', true);
    await reply('🔇 Chat mute kar di.');
  },
};
