// grouplist - List all groups bot is in
module.exports = {
  name: 'grouplist',
  alias: ['glist'],
  category: 'admin',
  desc: 'List all groups bot is in',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const groups = await sock.groupFetchAllParticipating();
    const list = Object.values(groups).slice(0, 50).map((g, i) => (i+1) + '. ' + g.subject).join('\n');
    await reply('👥 Groups (' + Object.keys(groups).length + '):\n' + list);
  },
};
