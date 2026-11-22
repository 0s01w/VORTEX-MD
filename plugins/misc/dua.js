// dua - Dua
module.exports = {
  name: 'dua',
  alias: ['dua'],
  category: 'misc',
  desc: 'Dua',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🤲 *Dua*\n\n"Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina azaban-nar."\n\nAameen!');
  },
};
