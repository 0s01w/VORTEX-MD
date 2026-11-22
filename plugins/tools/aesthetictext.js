// aesthetictext - Aesthetic text banao
module.exports = {
  name: 'aesthetictext',
  alias: ['aesthetictext'],
  category: 'tools',
  desc: 'Aesthetic text banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .aesthetictext <text>');
    await reply('✧･ﾟ: *✧･ﾟ:* ' + query + ' *:･ﾟ✧*:･ﾟ✧');
  },
};
