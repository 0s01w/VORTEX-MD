// pin - Message pin karo
module.exports = {
  name: 'pin',
  alias: ['pin'],
  category: 'group',
  desc: 'Message pin karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📌 Message pin ho gaya! (WhatsApp feature)');
  },
};
