// hearts - Hearts game
module.exports = {
  name: 'hearts',
  alias: ['hearts'],
  category: 'games',
  desc: 'Hearts game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('♥ Hearts ready! Dil wale cards se bacho!');
  },
};
