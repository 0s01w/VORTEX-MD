// about - About dekho
module.exports = {
  name: 'about',
  alias: ['about'],
  category: 'group',
  desc: 'About dekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = args[0] ? args[0].replace(/[^0-9]/g,'') + '@s.whatsapp.net' : sender;
    const about = await sock.fetchStatus(target).catch(() => null);
    await reply('📝 About: ' + (about?.status || 'Nahi mila'));
  },
};
