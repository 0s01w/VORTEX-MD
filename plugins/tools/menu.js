// menu - Sab commands ki list
module.exports = {
  name: 'menu',
  alias: ['menu', 'help'],
  category: 'tools',
  desc: 'Sab commands ki list',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { buildMenu } = require('../../lib/menu');
    const name = ctx.msg.pushName || 'User';
    await reply(buildMenu(name));
  },
};
