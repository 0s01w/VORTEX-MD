// hindi - Hindi boli
module.exports = {
  name: 'hindi',
  alias: ['hindi'],
  category: 'misc',
  desc: 'Hindi boli',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇮🇳 Hindi: "Mehnat kabhi bekaar nahi jati!"');
  },
};
