// codeblock - Code block banao
module.exports = {
  name: 'codeblock',
  alias: ['codeblock'],
  category: 'tools',
  desc: 'Code block banao',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    if (!query) return reply('Usage: .codeblock <code>');
    await reply('```\n' + query + '\n```');
  },
};
