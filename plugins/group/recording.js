// recording - Recording bhejo
module.exports = {
  name: 'recording',
  alias: ['recording'],
  category: 'group',
  desc: 'Recording bhejo',
  
  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, senderNumber, isGroup, isOwner } = ctx;
    const reply = async (text) => sock.sendMessage(jid, { text }, { quoted: msg });
    await sock.sendPresenceUpdate('recording', jid);
    await reply('🎙️ Recording bhej di.');
  },
};
