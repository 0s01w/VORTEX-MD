// groupinfo2 - Group details
module.exports = {
  name: 'groupinfo2',
  alias: ['groupinfo'],
  category: 'group',
  desc: 'Group details',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    await reply('👥 *' + meta.subject + '*\n👤 Members: ' + meta.participants.length + '\n🆔 ' + jid);
  },
};
