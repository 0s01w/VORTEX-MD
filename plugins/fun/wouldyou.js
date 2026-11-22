// wouldyou - Would you rather
module.exports = {
  name: 'wouldyou',
  alias: ['wyr'],
  category: 'fun',
  desc: 'Would you rather',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      'Would you rather: Hamesha late raho ya hamesha jaldi? ⏰',
      'Would you rather: Ud sakte ho ya parh sakte ho? 🦸',
      'Would you rather: Ameer lekin akelay ya ghareeb lekin khush? 💰'
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
