// bengali - Bengali seekho
module.exports = {
  name: 'bengali',
  alias: ['bengali'],
  category: 'misc',
  desc: 'Bengali seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇧🇩 Bengali: হ্যালো (Hello) - Hello!');
  },
};
