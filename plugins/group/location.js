// location - Location bhejo
module.exports = {
  name: 'location',
  alias: ['location'],
  category: 'group',
  desc: 'Location bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendMessage(jid, { location: { degreesLatitude: 30.3753, degreesLongitude: 69.3451, name: 'Pakistan' } });
  },
};
