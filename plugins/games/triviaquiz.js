// triviaquiz - Trivia quiz
module.exports = {
  name: 'triviaquiz',
  alias: ['triviaquiz'],
  category: 'games',
  desc: 'Trivia quiz',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await reply('🧠 Sawal: Pakistan ka sab se bara shehar?\nA) Karachi B) Lahore C) Islamabad\nJawab ke liye .triviaquiz <A/B/C> likho');
  },
};
