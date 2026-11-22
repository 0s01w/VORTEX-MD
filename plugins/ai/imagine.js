// imagine - AI image banao (Pollinations free)
module.exports = {
  name: 'imagine',
  alias: ['imagine', 'draw'],
  category: 'ai',
  desc: 'AI image banao (Pollinations free)',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .imagine <kya banana hai>');
    await reply('🎨 Image ban rahi hai...');
    const url = 'https://image.pollinations.ai/prompt/' + encodeURIComponent(query) + '?width=512&height=512&nologo=true';
    await sock.sendMessage(jid, { image: { url }, caption: '🎨 ' + query }, { quoted: msg });
  },
};
