// punjabi - Punjabi boli
module.exports = {
  name: 'punjabi',
  alias: ['punjabi'],
  category: 'misc',
  desc: 'Punjabi boli',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🦁 Punjabi: "Chak De Phatte!" - Mehnat karo, kamyabi milegi!');
  },
};
