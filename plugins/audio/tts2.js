// tts2 - Text to speech
module.exports = {
  name: 'tts2',
  alias: ['tts'],
  category: 'audio',
  desc: 'Text to speech',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .tts2 <text>');
    const url = 'https://translate.google.com/translate_tts?ie=UTF-8&q=' + encodeURIComponent(query) + '&tl=ur&client=tw-ob';
    await sock.sendMessage(jid, { audio: { url }, mimetype: 'audio/mp4' }, { quoted: msg });
  },
};
