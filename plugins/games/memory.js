// memory - Memory game
module.exports = {
  name: 'memory',
  alias: ['memory'],
  category: 'games',
  desc: 'Memory game',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const seq = [Math.floor(Math.random()*9)+1, Math.floor(Math.random()*9)+1, Math.floor(Math.random()*9)+1];
    await reply('🧠 Sequence yaad karo: ' + seq.join(' - ') + '\nAb .memory <numbers> likho');
  },
};
