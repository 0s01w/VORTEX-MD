// balochi - Balochi boli
module.exports = {
  name: 'balochi',
  alias: ['balochi'],
  category: 'misc',
  desc: 'Balochi boli',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌴 Balochi: "Sabr ka phal meetha hota hai!"');
  },
};
