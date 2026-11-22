// rps - Rock Paper Scissors
module.exports = {
  name: 'rps',
  alias: ['rockpaperscissors'],
  category: 'fun',
  desc: 'Rock Paper Scissors',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    const choices = ['rock', 'paper', 'scissors'];
    const bot = choices[Math.floor(Math.random() * 3)];
    const user = (args[0] || '').toLowerCase();
    if (!choices.includes(user)) return reply('Usage: .rps <rock/paper/scissors>');
    let result = 'Draw! 🤝';
    if ((user === 'rock' && bot === 'scissors') || (user === 'paper' && bot === 'rock') || (user === 'scissors' && bot === 'paper')) result = '🎉 Tum jeet gaye!';
    else if (user !== bot) result = '😢 Bot jeet gaya!';
    await reply('Tum: ' + user + ' vs Bot: ' + bot + '\n' + result);
  },
};
