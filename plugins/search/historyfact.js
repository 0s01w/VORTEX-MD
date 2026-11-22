// historyfact - History fact
module.exports = {
  name: 'historyfact',
  alias: ['historyfact'],
  category: 'search',
  desc: 'History fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('📜 History fact: Pehla computer 1945 mein bana tha!');
  },
};
