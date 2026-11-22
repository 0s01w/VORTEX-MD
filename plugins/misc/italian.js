// italian - Italian seekho
module.exports = {
  name: 'italian',
  alias: ['italian'],
  category: 'misc',
  desc: 'Italian seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇹 Italian: Ciao - Hello!');
  },
};
