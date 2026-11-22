// paused - Paused bhejo
module.exports = {
  name: 'paused',
  alias: ['paused'],
  category: 'group',
  desc: 'Paused bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendPresenceUpdate('paused', jid);
    await reply('⏸️ Paused bhej di.');
  },
};
