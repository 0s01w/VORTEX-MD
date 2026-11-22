// korean - Korean seekho
module.exports = {
  name: 'korean',
  alias: ['korean'],
  category: 'misc',
  desc: 'Korean seekho',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🇰🇷 Korean: 안녕하세요 (Annyeonghaseyo) - Hello!');
  },
};
