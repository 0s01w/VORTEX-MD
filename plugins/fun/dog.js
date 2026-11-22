// dog - Random dog photo
module.exports = {
  name: 'dog',
  alias: ['dogs'],
  category: 'fun',
  desc: 'Random dog photo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try {
      const data = await fetchJson('https://api.thecatapi.com/v1/images/search');
      await sock.sendMessage(jid, { image: { url: data[0].url }, caption: 'Random dog photo' }, { quoted: msg });
    } catch (e) { await reply('❌ Image nahi mili: ' + e.message); }
  },
};
