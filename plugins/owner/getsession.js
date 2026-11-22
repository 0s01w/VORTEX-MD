// getsession - Session info dikhao
module.exports = {
  name: 'getsession',
  alias: ['getsession'],
  category: 'owner',
  desc: 'Session info dikhao',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const fs = require('fs');
    const files = fs.existsSync('./auth') ? fs.readdirSync('./auth').length : 0;
    await reply('🔐 Session files: ' + files + '\n⚠️ Session kisi ko mat bhejo!');
  },
};
