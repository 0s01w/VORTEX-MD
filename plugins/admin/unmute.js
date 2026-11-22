// unmute - Unmute group
module.exports = {
  name: 'unmute',
  alias: ['unmute'],
  category: 'admin',
  desc: 'Unmute group',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.groupSettingUpdate(jid, 'not_announcement');
    await reply('🔊 Group unmute kar diya.');
  },
};
