// online - Online status bhejo
module.exports = {
  name: 'online',
  alias: ['online'],
  category: 'group',
  desc: 'Online status bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendPresenceUpdate('available', jid);
    await reply('🟢 Online ho gaya.');
  },
};
