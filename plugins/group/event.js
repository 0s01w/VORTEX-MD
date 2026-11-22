// event - Event banao
module.exports = {
  name: 'event',
  alias: ['event'],
  category: 'group',
  desc: 'Event banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .event <title>');
    await reply('📅 Event: ' + query + '\n(WhatsApp event feature use karo)');
  },
};
