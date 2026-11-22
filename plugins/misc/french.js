// french - French seekho
module.exports = {
  name: 'french',
  alias: ['french'],
  category: 'misc',
  desc: 'French seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇫🇷 French: Bonjour - Hello!');
  },
};
