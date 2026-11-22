// update - Bot update karo (git pull)
module.exports = {
  name: 'update',
  alias: ['update'],
  category: 'owner',
  desc: 'Bot update karo (git pull)',
  owner: true,
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const { exec } = require('child_process');
    await reply('⏳ Update ho raha hai...');
    exec('git pull', (err, stdout) => { reply(stdout || '✅ Update ho gaya!'); });
  },
};
