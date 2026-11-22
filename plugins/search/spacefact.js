// spacefact - Space fact
module.exports = {
  name: 'spacefact',
  alias: ['spacefact'],
  category: 'search',
  desc: 'Space fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🚀 Space fact: Venus pe ek din saal se lamba hota hai!');
  },
};
