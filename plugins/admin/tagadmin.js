// tagadmin - Tag all admins
module.exports = {
  name: 'tagadmin',
  alias: ['ta'],
  category: 'admin',
  desc: 'Tag all admins',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const admins = meta.participants.filter(p => p.admin).map(p => p.id);
    const text = (query || 'Admins dhyan do!') + '\n\n' + admins.map(m => '@' + m.split('@')[0]).join(' ');
    await sock.sendMessage(jid, { text, mentions: admins });
  },
};
