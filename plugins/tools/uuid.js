// uuid - UUID banao
module.exports = {
  name: 'uuid',
  alias: ['uuid'],
  category: 'tools',
  desc: 'UUID banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const crypto = require('crypto');
    await reply('🆔 ' + crypto.randomUUID());
  },
};
