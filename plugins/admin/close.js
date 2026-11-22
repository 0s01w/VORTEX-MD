// close - Close group (only admins)
module.exports = {
  name: 'close',
  alias: ['close'],
  category: 'admin',
  desc: 'Close group (only admins)',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.groupSettingUpdate(jid, 'announcement');
    await reply('✅ Group band kar diya.');
  },
};
