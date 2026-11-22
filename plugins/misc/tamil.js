// tamil - Tamil seekho
module.exports = {
  name: 'tamil',
  alias: ['tamil'],
  category: 'misc',
  desc: 'Tamil seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇳 Tamil: வணக்கம் (Vanakkam) - Hello!');
  },
};
