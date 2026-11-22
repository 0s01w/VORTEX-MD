// setbio - Bio lagao
module.exports = {
  name: 'setbio',
  alias: ['setbio'],
  category: 'group',
  desc: 'Bio lagao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setbio <text>');
    await sock.updateProfileStatus(query);
    await reply('✅ Bio lag gaya.');
  },
};
