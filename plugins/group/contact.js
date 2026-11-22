// contact - Contact card bhejo
module.exports = {
  name: 'contact',
  alias: ['contact'],
  category: 'group',
  desc: 'Contact card bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!args[0]) return reply('Usage: .contact <number>');
    const num = args[0].replace(/[^0-9]/g, '');
    await sock.sendMessage(jid, { contacts: { displayName: num, contacts: [{ vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:' + num + '\nTEL;TYPE=CELL:+'+ num + '\nEND:VCARD' }] } });
  },
};
