// horny - Funny meter
module.exports = {
  name: 'horny',
  alias: ['hornymeter'],
  category: 'fun',
  desc: 'Funny meter',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = query || 'tum';
    const pct = Math.floor(Math.random() * 100) + 1;
    await reply('📊 *horny* for ' + target + ': ' + pct + '%\n' + '█'.repeat(Math.floor(pct/10)) + '░'.repeat(10-Math.floor(pct/10)));
  },
};
