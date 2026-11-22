// echo2 - Echo effect
module.exports = {
  name: 'echo2',
  alias: ['echo'],
  category: 'audio',
  desc: 'Echo effect',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Echo lag raha hai...');
  },
};
