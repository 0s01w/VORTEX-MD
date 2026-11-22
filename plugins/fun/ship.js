// ship - Do logon ko ship karo
module.exports = {
  name: 'ship',
  alias: ['ship'],
  category: 'fun',
  desc: 'Do logon ko ship karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .ship <name1> & <name2>');
    const parts = query.split('&').map(s => s.trim());
    if (parts.length < 2) return reply('Usage: .ship Ali & Fatima');
    const pct = Math.floor(Math.random() * 100) + 1;
    await reply('💕 *' + parts[0] + ' ❤️ ' + parts[1] + '*\nLove: ' + pct + '%\n' + '❤️'.repeat(Math.floor(pct/10)));
  },
};
