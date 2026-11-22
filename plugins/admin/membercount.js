// membercount - Count group members
module.exports = {
  name: 'membercount',
  alias: ['mc'],
  category: 'admin',
  desc: 'Count group members',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    await reply('👥 Is group mein ' + meta.participants.length + ' members hain.');
  },
};
