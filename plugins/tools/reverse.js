// reverse - Text ulta karo
module.exports = {
  name: 'reverse',
  alias: ['reverse'],
  category: 'tools',
  desc: 'Text ulta karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .reverse <text>');
    await reply(query.split('').reverse().join(''));
  },
};
