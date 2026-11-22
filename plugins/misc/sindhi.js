// sindhi - Sindhi boli
module.exports = {
  name: 'sindhi',
  alias: ['sindhi'],
  category: 'misc',
  desc: 'Sindhi boli',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌊 Sindhi: "Sukh aaye, dukh wanjhe!"');
  },
};
