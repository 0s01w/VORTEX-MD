// echo - Echo effect dalo
module.exports = {
  name: 'echo',
  alias: ['echo'],
  category: 'media',
  desc: 'Echo effect dalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Echo lag raha hai...');
  },
};
