// ============================================
// MESSAGE HANDLER - har message yahan se guzarta hai
// ============================================
const settings = require('../config/settings');
const db = require('../lib/database');
const { getText, getContentType, jidToNumber, isGroupJid } = require('../lib/myfunc');
const loader = require('./loader');

const cooldowns = new Map(); // userId -> last command time
const spamTracker = new Map(); // userId -> [timestamps]

async function handleMessage(sock, msg) {
  try {
    if (!msg.message) return;
    if (msg.key.fromMe && msg.key.remoteJid === 'status@broadcast') return;

    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || jid;
    const senderNumber = jidToNumber(sender);
    const isGroup = isGroupJid(jid);
    const text = getText(msg);
    const prefix = settings.prefix;

    // Stats
    db.db.stats.totalMessages++;
    const user = db.getUser(sender);
    user.commandsUsed = user.commandsUsed || 0;

    // Banned check
    if (db.isBannedUser(sender) && senderNumber !== settings.ownerNumber) {
      return;
    }
    if (isGroup && db.isBannedGroup(jid)) return;

    // Auto-read / auto-typing
    if (settings.features.autoRead) await sock.sendReadReceipt(jid, msg.key);
    if (settings.features.autoTyping) {
      await sock.sendPresenceUpdate('composing', jid).catch(() => {});
    }

    // Group settings
    const groupData = isGroup ? db.getGroup(jid) : null;

    // Anti-link
    if (isGroup && groupData?.antilink && text.includes('chat.whatsapp.com')) {
      await sock.sendMessage(jid, { text: '🚫 Group mein link allowed nahi hai!', delete: { remoteJid: jid, fromMe: false, id: msg.key.id } }).catch(() => {});
      return;
    }

    // Anti-badword
    if (isGroup && groupData?.antibadword) {
      const badwords = ['gali1', 'gali2']; // apni list yahan badlo
      if (badwords.some(w => text.toLowerCase().includes(w))) {
        await sock.sendMessage(jid, { text: '🚫 Bad language allowed nahi hai!' }).catch(() => {});
        return;
      }
    }

    // Anti-spam
    if (settings.features.antiSpam) {
      const now = Date.now();
      const arr = (spamTracker.get(sender) || []).filter(t => now - t < settings.antiSpam.timeWindow);
      arr.push(now);
      spamTracker.set(sender, arr);
      if (arr.length > settings.antiSpam.maxMessages) {
        if (settings.antiSpam.action === 'warn') {
          await sock.sendMessage(jid, { text: '⚠️ Spam mat karo! Thoda ruk jao.' }).catch(() => {});
        }
        spamTracker.set(sender, []);
        return;
      }
    }

    // Command check
    if (!text.startsWith(prefix)) return;
    const withoutPrefix = text.slice(prefix.length).trim();
    if (!withoutPrefix) return;

    const parts = withoutPrefix.split(/\s+/);
    const cmdName = parts[0].toLowerCase();
    const args = parts.slice(1);
    const query = args.join(' ');

    const plugin = loader.getCommand(cmdName);
    if (!plugin) return;

    // Cooldown (3 second per user per command)
    const cdKey = sender + ':' + plugin.name;
    const last = cooldowns.get(cdKey) || 0;
    if (Date.now() - last < 3000 && senderNumber !== settings.ownerNumber) {
      return;
    }
    cooldowns.set(cdKey, Date.now());

    // Permission checks
    const isOwner = senderNumber === settings.ownerNumber;
    if (plugin.owner && !isOwner) {
      await sock.sendMessage(jid, { text: '❌ Ye command sirf owner ke liye hai.' });
      return;
    }
    if (plugin.group && !isGroup) {
      await sock.sendMessage(jid, { text: '❌ Ye command sirf group mein chalega.' });
      return;
    }
    if (plugin.private && isGroup) {
      await sock.sendMessage(jid, { text: '❌ Ye command sirf private chat mein chalega.' });
      return;
    }
    if (plugin.admin && isGroup) {
      const meta = await sock.groupMetadata(jid).catch(() => null);
      const isAdmin = meta?.participants?.some(p => (p.id === sender || p.lid === sender) && (p.admin === 'admin' || p.admin === 'superadmin'));
      if (!isAdmin && !isOwner) {
        await sock.sendMessage(jid, { text: '❌ Ye command sirf group admin ke liye hai.' });
        return;
      }
    }
    if (plugin.premium && !db.isPremium(sender) && !isOwner) {
      await sock.sendMessage(jid, { text: '❌ Ye premium command hai. .buy premium se lo.' });
      return;
    }

    // Execute
    const ctx = { sock, msg, jid, sender, senderNumber, isGroup, isOwner, args, query, text, user, groupData, prefix };
    await plugin.execute(ctx);

    db.db.stats.totalCommands++;
    user.commandsUsed++;
    db.save();

  } catch (e) {
    console.error('[HANDLER] Error:', e.message);
  }
}

async function handleGroupUpdate(sock, updates) {
  for (const update of updates) {
    const jid = update.id;
    const groupData = db.getGroup(jid);
    const meta = await sock.groupMetadata(jid).catch(() => null);
    const groupName = meta?.subject || 'Group';

    for (const participant of update.participants || []) {
      const userJid = participant.id || participant.lid;
      const number = jidToNumber(userJid);
      if (update.action === 'add' && groupData.welcome && settings.features.welcome) {
        await sock.sendMessage(jid, {
          text: `👋 Welcome @${number} to *${groupName}*!\n\n${settings.botName} ki taraf se khush-aamdeed! 🎉\nType ${settings.prefix}menu for commands.`,
          mentions: [userJid],
        }).catch(() => {});
      }
      if (update.action === 'remove' && groupData.goodbye && settings.features.goodbye) {
        await sock.sendMessage(jid, {
          text: `👋 @${number} group chor gaya. Allah Hafiz!`,
          mentions: [userJid],
        }).catch(() => {});
      }
    }
  }
}

async function handleCall(sock, calls) {
  if (!settings.features.antiCall) return;
  for (const call of calls) {
    if (call.status === 'offer') {
      await sock.sendMessage(call.id, { text: '❌ Calls allowed nahi hain. Bot sirf messages ke liye hai.' }).catch(() => {});
      await sock.callReject(call.id).catch(() => {});
    }
  }
}

module.exports = { handleMessage, handleGroupUpdate, handleCall };
