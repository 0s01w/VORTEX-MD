// spanish - Spanish seekho
module.exports = {
  name: 'spanish',
  alias: ['spanish'],
  category: 'misc',
  desc: 'Spanish seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇪🇸 Spanish: Hola - Hello!');
  },
};
