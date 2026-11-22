// buy - Shop se kharido
module.exports = {
  name: 'buy',
  alias: ['buy'],
  category: 'tools',
  desc: 'Shop se kharido',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!args[0]) return reply('Usage: .buy <item>');
    await reply('✅ ' + args[0] + ' kharid liya! (demo)');
  },
};
