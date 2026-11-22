// reverb - Reverb effect dalo
module.exports = {
  name: 'reverb',
  alias: ['reverb'],
  category: 'media',
  desc: 'Reverb effect dalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Reverb lag raha hai...');
  },
};
