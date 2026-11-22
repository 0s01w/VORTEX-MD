// reverb2 - Reverb effect
module.exports = {
  name: 'reverb2',
  alias: ['reverb'],
  category: 'audio',
  desc: 'Reverb effect',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Reverb lag raha hai...');
  },
};
