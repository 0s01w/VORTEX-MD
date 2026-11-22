// geographyfact - Geography fact
module.exports = {
  name: 'geographyfact',
  alias: ['geofact'],
  category: 'search',
  desc: 'Geography fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🌍 Geography fact: Russia duniya ka sab se bara mulk hai!');
  },
};
