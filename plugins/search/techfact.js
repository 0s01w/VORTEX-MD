// techfact - Tech fact
module.exports = {
  name: 'techfact',
  alias: ['techfact'],
  category: 'search',
  desc: 'Tech fact',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('💻 Tech fact: Pehla email 1971 mein bheja gaya tha!');
  },
};
