// alive - Bot zinda hai?
module.exports = {
  name: 'alive',
  alias: ['alive'],
  category: 'tools',
  desc: 'Bot zinda hai?',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✅ Bot zinda hai!\n🤖 ' + require('../../config/settings').botName + ' v' + require('../../config/settings').botVersion + '\n⏱️ Uptime: ' + Math.floor(process.uptime()) + 's');
  },
};
