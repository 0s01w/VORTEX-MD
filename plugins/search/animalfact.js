// animalfact - Animal fact
module.exports = {
  name: 'animalfact',
  alias: ['animalfact'],
  category: 'search',
  desc: 'Animal fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🦁 Animal fact: Sher ek din mein 40kg gosht kha sakta hai!');
  },
};
