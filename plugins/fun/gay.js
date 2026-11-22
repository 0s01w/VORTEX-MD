// gay - Gay meter (fun)
module.exports = {
  name: 'gay',
  alias: ['gaymeter'],
  category: 'fun',
  desc: 'Gay meter (fun)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const target = query || 'tum';
    const pct = Math.floor(Math.random() * 100) + 1;
    await reply('📊 *gay* for ' + target + ': ' + pct + '%\n' + '█'.repeat(Math.floor(pct/10)) + '░'.repeat(10-Math.floor(pct/10)));
  },
};
