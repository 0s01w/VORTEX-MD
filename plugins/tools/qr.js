// qr - Text se QR code banao
module.exports = {
  name: 'qr',
  alias: ['qrcode'],
  category: 'tools',
  desc: 'Text se QR code banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .qr <text>');
    const QRCode = require('qrcode');
    const buf = await QRCode.toBuffer(query);
    await sock.sendMessage(jid, { image: buf, caption: '📱 QR Code' }, { quoted: msg });
  },
};
