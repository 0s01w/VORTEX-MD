// robot - Robot voice banao
module.exports = {
  name: 'robot',
  alias: ['robot'],
  category: 'media',
  desc: 'Robot voice banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🤖 Robot voice ban rahi hai...');
  },
};
