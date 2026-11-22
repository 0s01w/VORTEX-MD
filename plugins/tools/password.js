// password - Strong password banao
module.exports = {
  name: 'password',
  alias: ['pass'],
  category: 'tools',
  desc: 'Strong password banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const len = parseInt(args[0]) || 16;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let pass = '';
    for (let i = 0; i < len; i++) pass += chars[Math.floor(Math.random() * chars.length)];
    await reply('🔑 Password: ' + pass);
  },
};
