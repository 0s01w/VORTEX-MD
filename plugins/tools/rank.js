// rank - Tumhara rank
module.exports = {
  name: 'rank',
  alias: ['rank'],
  category: 'tools',
  desc: 'Tumhara rank',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const u = ctx.user;
    await reply('🏆 Tumhara level: ' + u.level + '\nXP: ' + u.xp + '\nAgla level ke liye ' + (u.level * 100 - u.xp) + ' XP chahiye!');
  },
};
