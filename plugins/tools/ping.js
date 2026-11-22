// ping - Bot speed check
module.exports = {
  name: 'ping',
  alias: ['p'],
  category: 'tools',
  desc: 'Bot speed check',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const start = Date.now();
    await reply('🏓 Pong!');
    await reply('⚡ Speed: ' + (Date.now() - start) + 'ms');
  },
};
