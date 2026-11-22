// quran - Quran ayat
module.exports = {
  name: 'quran',
  alias: ['quran'],
  category: 'misc',
  desc: 'Quran ayat',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { fetchJson } = require('../../lib/myfunc');
    try { const d = await fetchJson('https://api.alquran.cloud/v1/ayah/' + (Math.floor(Math.random() * 6236) + 1) + '/ur.alafasy'); await reply('📖 *' + d.data.surah.englishName + ' (' + d.data.numberInSurah + ')*\n\n' + d.data.text); }
    catch { await reply('📖 Quran ayat load nahi ho saki.'); }
  },
};
