// sciencefact - Science fact
module.exports = {
  name: 'sciencefact',
  alias: ['sciencefact'],
  category: 'search',
  desc: 'Science fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🔬 Science fact: Pani garam aur thanda dono mein ubalta hai!');
  },
};
