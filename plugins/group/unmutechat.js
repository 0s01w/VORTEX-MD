// unmutechat - Chat unmute karo
module.exports = {
  name: 'unmutechat',
  alias: ['unmutechat'],
  category: 'group',
  desc: 'Chat unmute karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.chatModify(jid, 'mute', false);
    await reply('🔊 Chat unmute kar di.');
  },
};
