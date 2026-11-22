// russian - Russian seekho
module.exports = {
  name: 'russian',
  alias: ['russian'],
  category: 'misc',
  desc: 'Russian seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇷🇺 Russian: Привет (Privet) - Hello!');
  },
};
