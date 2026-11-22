// profilepic - Profile pic dekho
module.exports = {
  name: 'profilepic',
  alias: ['pp', 'mypic'],
  category: 'group',
  desc: 'Profile pic dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : sender;
    const url = await sock.profilePictureUrl(target).catch(() => null);
    if (url) await sock.sendMessage(jid, { image: { url }, caption: '👤 Profile pic' });
    else await reply('❌ Pic nahi mili (privacy).');
  },
};
