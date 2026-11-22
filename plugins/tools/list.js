// list - Commands ki list (short)
module.exports = {
  name: 'list',
  alias: ['list', 'cmds'],
  category: 'tools',
  desc: 'Commands ki list (short)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const loader = require('../../handler/loader');
    const cmds = loader.getAllCommands().map(p => ctx.prefix + p.name).join(', ');
    await reply('📋 Commands (' + loader.getAllCommands().length + '):\n' + cmds);
  },
};
