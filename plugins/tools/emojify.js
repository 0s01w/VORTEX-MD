// emojify - Text mein emoji dalo
module.exports = {
  name: 'emojify',
  alias: ['emojify'],
  category: 'tools',
  desc: 'Text mein emoji dalo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .emojify <text>');
    await reply(query + ' 😊✨🔥');
  },
};
