// offline - Offline status bhejo
module.exports = {
  name: 'offline',
  alias: ['offline'],
  category: 'group',
  desc: 'Offline status bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendPresenceUpdate('unavailable', jid);
    await reply('🔴 Offline ho gaya.');
  },
};
