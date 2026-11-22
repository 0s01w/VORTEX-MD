// mathfact - Math fact
module.exports = {
  name: 'mathfact',
  alias: ['mathfact'],
  category: 'search',
  desc: 'Math fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔢 Math fact: Zero ka matlab "kuch nahi" hota hai!');
  },
};
