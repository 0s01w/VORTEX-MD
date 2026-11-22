// owner - Bot owner info
module.exports = {
  name: 'owner',
  alias: ['owner'],
  category: 'tools',
  desc: 'Bot owner info',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const s = require('../../config/settings');
    await reply('👑 Owner: ' + s.botOwner + '\n📱 Number: ' + s.ownerNumber + '\n🤖 Bot: ' + s.botName);
  },
};
