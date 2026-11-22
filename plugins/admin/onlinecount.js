// onlinecount - Count online members (approx)
module.exports = {
  name: 'onlinecount',
  alias: ['oc'],
  category: 'admin',
  desc: 'Count online members (approx)',
  group: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const meta = await sock.groupMetadata(jid);
    await reply('👥 Total members: ' + meta.participants.length + '\n(Online count WhatsApp API se direct nahi milta)');
  },
};
