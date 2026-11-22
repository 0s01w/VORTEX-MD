// lastseen - Last seen dekho
module.exports = {
  name: 'lastseen',
  alias: ['lastseen'],
  category: 'group',
  desc: 'Last seen dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('👁️ Last seen privacy settings pe depend karta hai.');
  },
};
