// chatstate - Chat state dekho
module.exports = {
  name: 'chatstate',
  alias: ['chatstate'],
  category: 'group',
  desc: 'Chat state dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('💬 Chat state: Active');
  },
};
