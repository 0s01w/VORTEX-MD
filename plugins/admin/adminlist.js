// adminlist - List group admins
module.exports = {
  name: 'adminlist',
  alias: ['alist'],
  category: 'admin',
  desc: 'List group admins',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const admins = meta.participants.filter(p => p.admin).map(p => '@' + p.id.split('@')[0]).join('\n');
    await sock.sendMessage(jid, { text: '🛡️ Admins:\n' + admins, mentions: meta.participants.filter(p => p.admin).map(p => p.id) });
  },
};
