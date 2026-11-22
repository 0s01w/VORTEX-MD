// persian - Persian seekho
module.exports = {
  name: 'persian',
  alias: ['persian'],
  category: 'misc',
  desc: 'Persian seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇷 Persian: سلام (Salam) - Hello!');
  },
};
