// ============================================
// MENU BUILDER - categories ke hisab se menu banata hai
// ============================================
const loader = require('../handler/loader');
const settings = require('../config/settings');

const CATEGORY_INFO = {
  admin:    { emoji: '🛡️', title: 'ADMIN' },
  download: { emoji: '⬇️', title: 'DOWNLOAD' },
  fun:      { emoji: '😂', title: 'FUN' },
  games:    { emoji: '🎮', title: 'GAMES' },
  ai:       { emoji: '🤖', title: 'AI' },
  tools:    { emoji: '🛠️', title: 'TOOLS' },
  media:    { emoji: '🎨', title: 'MEDIA' },
  search:   { emoji: '🔍', title: 'SEARCH' },
  owner:    { emoji: '👑', title: 'OWNER' },
  group:    { emoji: '👥', title: 'GROUP' },
  audio:    { emoji: '🎵', title: 'AUDIO' },
  misc:     { emoji: '✨', title: 'MISC' },
};

function buildMenu(userName = 'User') {
  const cats = loader.getCategories();
  const total = loader.getAllCommands().length;
  const now = new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' });

  let menu = `╭─「 *${settings.botName}* 」─\n`;
  menu += `│ 👤 User: ${userName}\n`;
  menu += `│ 📦 Total Commands: ${total}\n`;
  menu += `│ 🕐 ${now}\n`;
  menu += `╰───────────────\n\n`;

  for (const [cat, plugins] of Object.entries(cats)) {
    const info = CATEGORY_INFO[cat] || { emoji: '📁', title: cat.toUpperCase() };
    menu += `╭─「 ${info.emoji} *${info.title}* 」─\n`;
    for (const p of plugins.sort((a, b) => a.name.localeCompare(b.name))) {
      menu += `│ ${settings.prefix}${p.name}\n`;
    }
    menu += `╰───────────────\n\n`;
  }

  menu += `💡 Help: ${settings.prefix}help <command>\n`;
  menu += `📋 List: ${settings.prefix}list\n`;
  menu += `🤖 AI: ${settings.prefix}ai <sawal>`;

  return menu;
}

function buildCategoryMenu(category) {
  const plugins = loader.getByCategory(category);
  if (!plugins.length) return `❌ "${category}" category nahi mili. ${settings.prefix}menu dekho.`;
  const info = CATEGORY_INFO[category] || { emoji: '📁', title: category.toUpperCase() };
  let menu = `╭─「 ${info.emoji} *${info.title}* 」─\n`;
  for (const p of plugins.sort((a, b) => a.name.localeCompare(b.name))) {
    menu += `│ ${settings.prefix}${p.name} - ${p.desc || ''}\n`;
  }
  menu += `╰───────────────`;
  return menu;
}

function buildHelp(commandName) {
  const p = loader.getCommand(commandName);
  if (!p) return `❌ Command "${commandName}" nahi mila.`;
  return `╭─「 *${p.name}* 」─\n│ 📁 Category: ${p.category}\n│ 📝 ${p.desc || 'No description'}\n│ 🔤 Aliases: ${(p.alias || []).join(', ') || '-'}\n│ 👑 Owner only: ${p.owner ? 'Yes' : 'No'}\n│ 👥 Group only: ${p.group ? 'Yes' : 'No'}\n│ 🛡️ Admin only: ${p.admin ? 'Yes' : 'No'}\n╰───────────────\n\nUsage: ${settings.prefix}${p.name} <args>`;
}

module.exports = { buildMenu, buildCategoryMenu, buildHelp, CATEGORY_INFO };
