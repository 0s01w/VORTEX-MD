// robot2 - Robot voice
module.exports = {
  name: 'robot2',
  alias: ['robot'],
  category: 'audio',
  desc: 'Robot voice',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🤖 Robot voice ban rahi hai...');
  },
};
