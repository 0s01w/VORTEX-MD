// tts3 - Text to speech (English)
module.exports = {
  name: 'tts3',
  alias: ['tts3'],
  category: 'audio',
  desc: 'Text to speech (English)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .tts3 <text>');
    const url = 'https://translate.google.com/translate_tts?ie=UTF-8&q=' + encodeURIComponent(query) + '&tl=en&client=tw-ob';
    await sock.sendMessage(jid, { audio: { url }, mimetype: 'audio/mp4' }, { quoted: msg });
  },
};
