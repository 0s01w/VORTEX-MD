// grouppic - Group pic dekho
module.exports = {
  name: 'grouppic',
  alias: ['grouppic'],
  category: 'group',
  desc: 'Group pic dekho',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    const url = await sock.profilePictureUrl(jid).catch(() => null);
    if (url) await sock.sendMessage(jid, { image: { url }, caption: '👥 Group pic' });
    else await reply('❌ Group pic nahi mili.');
  },
};
