// cleardb - Database clear karo
module.exports = {
  name: 'cleardb',
  alias: ['cleardb'],
  category: 'owner',
  desc: 'Database clear karo',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('⚠️ Pakka? .cleardb confirm likho');
  },
};
