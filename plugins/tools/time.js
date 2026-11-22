// time - Abhi ka time/date
module.exports = {
  name: 'time',
  alias: ['time', 'date'],
  category: 'tools',
  desc: 'Abhi ka time/date',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const now = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' });
    await reply('🕐 Pakistan time: ' + now);
  },
};
