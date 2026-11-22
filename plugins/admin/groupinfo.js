// groupinfo - Group details
module.exports = {
  name: 'groupinfo',
  alias: ['ginfo'],
  category: 'admin',
  desc: 'Group details',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const admins = meta.participants.filter(p => p.admin).length;
    await reply('👥 *' + meta.subject + '*\n🆔 ' + jid + '\n👤 Members: ' + meta.participants.length + '\n🛡️ Admins: ' + admins + '\n📝 ' + (meta.desc || 'No description'));
  },
};
