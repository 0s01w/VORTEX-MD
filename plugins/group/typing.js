// typing - Typing bhejo
module.exports = {
  name: 'typing',
  alias: ['typing'],
  category: 'group',
  desc: 'Typing bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendPresenceUpdate('composing', jid);
    await reply('⌨️ Typing bhej di.');
  },
};
