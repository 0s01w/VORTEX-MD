// unpin - Pin hatao
module.exports = {
  name: 'unpin',
  alias: ['unpin'],
  category: 'group',
  desc: 'Pin hatao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📌 Pin hata diya!');
  },
};
