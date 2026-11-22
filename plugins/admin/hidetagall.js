// hidetagall - Hide tag all
module.exports = {
  name: 'hidetagall',
  alias: ['hta'],
  category: 'admin',
  desc: 'Hide tag all',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const mentions = meta.participants.map(p => p.id);
    await sock.sendMessage(jid, { text: query || 'Dhyan do sab!', mentions });
  },
};
