// english - English seekho
module.exports = {
  name: 'english',
  alias: ['english'],
  category: 'misc',
  desc: 'English seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇬🇧 English tip: Roz 10 naye words seekho!');
  },
};
