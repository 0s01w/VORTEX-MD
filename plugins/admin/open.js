// open - Open group (everyone can send)
module.exports = {
  name: 'open',
  alias: ['open'],
  category: 'admin',
  desc: 'Open group (everyone can send)',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.groupSettingUpdate(jid, 'not_announcement');
    await reply('✅ Group open kar diya.');
  },
};
