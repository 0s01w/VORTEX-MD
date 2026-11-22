// grouplink - Get group invite link
module.exports = {
  name: 'grouplink',
  alias: ['link'],
  category: 'admin',
  desc: 'Get group invite link',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const code = await sock.groupInviteCode(jid);
    await reply('🔗 Group link: https://chat.whatsapp.com/' + code);
  },
};
