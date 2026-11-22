// readreceipt - Read receipt bhejo
module.exports = {
  name: 'readreceipt',
  alias: ['readreceipt'],
  category: 'group',
  desc: 'Read receipt bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendReadReceipt(jid, msg.key);
    await reply('✅ Read receipt bhej di.');
  },
};
