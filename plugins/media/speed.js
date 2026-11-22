// speed - Video speed badlo
module.exports = {
  name: 'speed',
  alias: ['speed'],
  category: 'media',
  desc: 'Video speed badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('⏩ Speed badal rahi hai...');
  },
};
