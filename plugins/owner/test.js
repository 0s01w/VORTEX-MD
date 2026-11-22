// test - Bot test karo
module.exports = {
  name: 'test',
  alias: ['test'],
  category: 'owner',
  desc: 'Bot test karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('✅ Bot test pass!\n🤖 ' + require('../../config/settings').botName + ' sab theek hai.');
  },
};
