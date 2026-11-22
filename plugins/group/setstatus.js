// setstatus - Status lagao
module.exports = {
  name: 'setstatus',
  alias: ['setstatus'],
  category: 'group',
  desc: 'Status lagao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setstatus <text>');
    await sock.updateProfileStatus(query);
    await reply('✅ Status lag gaya: ' + query);
  },
};
