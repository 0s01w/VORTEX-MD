// hidetag - Tag all without showing numbers
module.exports = {
  name: 'hidetag',
  alias: ['ht'],
  category: 'admin',
  desc: 'Tag all without showing numbers',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const mentions = meta.participants.map(p => p.id);
    await sock.sendMessage(jid, { text: query || 'Sab log dhyan do!', mentions });
  },
};
