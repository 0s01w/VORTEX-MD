// spoiler - Spoiler text banao
module.exports = {
  name: 'spoiler',
  alias: ['spoiler'],
  category: 'tools',
  desc: 'Spoiler text banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .spoiler <text>');
    await reply('||' + query + '||');
  },
};
