// daily - Daily reward lo
module.exports = {
  name: 'daily',
  alias: ['daily'],
  category: 'tools',
  desc: 'Daily reward lo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const u = ctx.user;
    const now = Date.now();
    if (now - u.lastDaily < 86400000) return reply('⏳ Kal phir aana! Last claim: ' + new Date(u.lastDaily).toLocaleString());
    u.lastDaily = now; u.coins += require('../../config/settings').economy.dailyReward;
    require('../../lib/database').save();
    await reply('🎁 Daily reward mila: +' + require('../../config/settings').economy.dailyReward + ' coins!\n💰 Total: ' + u.coins);
  },
};
