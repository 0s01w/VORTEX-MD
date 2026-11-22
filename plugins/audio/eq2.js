// eq2 - Equalizer lagao
module.exports = {
  name: 'eq2',
  alias: ['eq'],
  category: 'audio',
  desc: 'Equalizer lagao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🎚️ Equalizer lag raha hai...');
  },
};
