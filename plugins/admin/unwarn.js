// unwarn - Remove warning
module.exports = {
  name: 'unwarn',
  alias: ['unwarning'],
  category: 'admin',
  desc: 'Remove warning',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✅ Warning remove kar di.');
  },
};
