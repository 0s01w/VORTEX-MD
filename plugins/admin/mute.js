// mute - Mute group (only admins can send)
module.exports = {
  name: 'mute',
  alias: ['mute'],
  category: 'admin',
  desc: 'Mute group (only admins can send)',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.groupSettingUpdate(jid, 'announcement');
    await reply('🔇 Group mute kar diya. Ab sirf admins message bhej sakte hain.');
  },
};
