// price - Price compare karo
module.exports = {
  name: 'price',
  alias: ['price'],
  category: 'search',
  desc: 'Price compare karo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .price <product>');
    await reply('💰 Price check: Daraz, Amazon, eBay pe compare karo: ' + query);
  },
};
