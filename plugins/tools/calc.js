// calc - Calculator
module.exports = {
  name: 'calc',
  alias: ['calculate'],
  category: 'tools',
  desc: 'Calculator',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .calc 2+2*5');
    try { const result = eval(query.replace(/[^0-9+\-*/().% ]/g, '')); await reply('🧮 ' + query + ' = ' + result); }
    catch { await reply('❌ Galat expression!'); }
  },
};
