// pinterest - Pinterest se image download karo
module.exports = {
  name: 'pinterest',
  alias: ['pin', 'pinterestdl'],
  category: 'download',
  desc: 'Pinterest se image download karo (pin URL do)',

  execute: async (ctx) => {
    const { sock, msg, jid, args, query, reply } = ctx;
    const { downloadPinterest } = require('../../lib/downloader');

    const url = args[0] || query;
    if (!url) return reply('❌ Usage: .pinterest <Pinterest pin link>\nExample: .pinterest https://pin.it/xxxxxx');

    await reply('⏳ Pinterest se image nikal raha hai...');
    try {
      const res = await downloadPinterest(url);
      if (!res.url) return reply('❌ Pinterest se image nahi mili. Link sahi hai?');

      const { getBuffer } = require('../../lib/myfunc');
      const buf = await getBuffer(res.url);
      await sock.sendMessage(jid, { image: buf, caption: `📌 *Pinterest*\n${res.title || ''}` }, { quoted: msg });
    } catch (e) {
      await reply('❌ Error: ' + e.message);
    }
  },
};
