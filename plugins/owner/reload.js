// reload - Plugins reload karo
module.exports = {
  name: 'reload',
  alias: ['reload'],
  category: 'owner',
  desc: 'Plugins reload karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const loader = require('../../handler/loader');
    const n = loader.loadPlugins();
    await reply('✅ ' + n + ' plugins reload ho gaye!');
  },
};
