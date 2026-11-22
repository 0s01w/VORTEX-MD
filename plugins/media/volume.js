// volume - Volume badlo
module.exports = {
  name: 'volume',
  alias: ['volume'],
  category: 'media',
  desc: 'Volume badlo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔊 Volume badal raha hai...');
  },
};
