// ttp - Text to sticker (ttp)
module.exports = {
  name: 'ttp',
  alias: ['ttp'],
  category: 'fun',
  desc: 'Text to sticker (ttp)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .attp <text>');
    const { textToSticker } = require('../../lib/sticker');
    await reply('⏳ Sticker ban raha hai...');
    const buf = await textToSticker(query);
    await sock.sendMessage(jid, { sticker: buf }, { quoted: msg });
  },
};
