// profile - Tumhari profile
module.exports = {
  name: 'profile',
  alias: ['profile', 'me'],
  category: 'tools',
  desc: 'Tumhari profile',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const u = ctx.user;
    await reply('👤 *Profile*\n📱 Number: ' + senderNumber + '\n💰 Coins: ' + u.coins + '\n⭐ Level: ' + u.level + '\n🔥 XP: ' + u.xp + '\n📊 Commands used: ' + u.commandsUsed);
  },
};
