// tagall - Tag all group members
module.exports = {
  name: 'tagall',
  alias: ['tag'],
  category: 'admin',
  desc: 'Tag all group members',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const mentions = meta.participants.map(p => p.id);
    const text = (query || 'Sab log dhyan do!') + '\n\n' + mentions.map(m => '@' + m.split('@')[0]).join(' ');
    await sock.sendMessage(jid, { text, mentions });
  },
};
