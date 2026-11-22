// help - Command ki help
module.exports = {
  name: 'help',
  alias: ['help'],
  category: 'tools',
  desc: 'Command ki help',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!args[0]) return reply('Usage: .help <command>');
    const { buildHelp } = require('../../lib/menu');
    await reply(buildHelp(args[0]));
  },
};
