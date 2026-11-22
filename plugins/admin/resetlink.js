// resetlink - Reset group invite link
module.exports = {
  name: 'resetlink',
  alias: ['revoke'],
  category: 'admin',
  desc: 'Reset group invite link',
  group: true, admin: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.groupRevokeInvite(jid);
    const code = await sock.groupInviteCode(jid);
    await reply('✅ Naya link: https://chat.whatsapp.com/' + code);
  },
};
