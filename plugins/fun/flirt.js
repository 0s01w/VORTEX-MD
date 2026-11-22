// flirt - Funny flirt line
module.exports = {
  name: 'flirt',
  alias: ['flirts'],
  category: 'fun',
  desc: 'Funny flirt line',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const items = [
      "Tum chand ho, aur main tumhara chandni raat ka safar",
      "Tumhari smile dekh ke dil ne kaha: Bas, yahi hai!",
      "Tum paas ho to har din Eid jaisa lagta hai"
    ];
    const pick = items[Math.floor(Math.random() * items.length)];
    await reply(pick);
  },
};
