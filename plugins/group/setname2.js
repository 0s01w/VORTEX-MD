// setname2 - Apna naam badlo
module.exports = {
  name: 'setname2',
  alias: ['setname'],
  category: 'group',
  desc: 'Apna naam badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .setname2 <naam>');
    await sock.updateProfileName(query);
    await reply('✅ Naam badal gaya: ' + query);
  },
};
