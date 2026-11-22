// love - Love percentage check
module.exports = {
  name: 'love',
  alias: ['lovecalc'],
  category: 'fun',
  desc: 'Love percentage check',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = query || 'tum';
    const pct = Math.floor(Math.random() * 100) + 1;
    await reply('📊 *love* for ' + target + ': ' + pct + '%\n' + '█'.repeat(Math.floor(pct/10)) + '░'.repeat(10-Math.floor(pct/10)));
  },
};
