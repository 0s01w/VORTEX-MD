// pashto - Pashto boli
module.exports = {
  name: 'pashto',
  alias: ['pashto'],
  category: 'misc',
  desc: 'Pashto boli',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🏔️ Pashto: "Mehnat ka phal meetha hota hai!"');
  },
};
