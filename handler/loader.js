// ============================================
// PLUGIN LOADER - plugins/ folder se sab commands load karta hai
// Har category alag folder mein hai (koi mix nahi)
// ============================================
const fs = require('fs');
const path = require('path');

const PLUGINS_DIR = path.join(__dirname, '..', 'plugins');
const commands = new Map(); // name/alias -> plugin

function loadPlugins() {
  commands.clear();
  const categories = fs.readdirSync(PLUGINS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let total = 0;
  for (const cat of categories) {
    const catPath = path.join(PLUGINS_DIR, cat);
    const files = fs.readdirSync(catPath).filter(f => f.endsWith('.js'));
    for (const file of files) {
      try {
        // Cache clear (hot-reload ke liye)
        delete require.cache[require.resolve(path.join(catPath, file))];
        const plugin = require(path.join(catPath, file));
        if (!plugin.name || !plugin.execute) {
          console.warn(`[LOADER] Skip ${cat}/${file}: name ya execute missing`);
          continue;
        }
        plugin.category = plugin.category || cat;
        commands.set(plugin.name.toLowerCase(), plugin);
        if (plugin.alias) {
          for (const a of plugin.alias) commands.set(a.toLowerCase(), plugin);
        }
        total++;
      } catch (e) {
        console.error(`[LOADER] Error loading ${cat}/${file}:`, e.message);
      }
    }
  }
  console.log(`✅ ${total} plugins loaded from ${categories.length} categories`);
  return total;
}

function getCommand(name) {
  return commands.get(name.toLowerCase());
}

function getAllCommands() {
  // Duplicate aliases hatake unique plugins
  const unique = new Map();
  for (const p of commands.values()) unique.set(p.name, p);
  return [...unique.values()];
}

function getByCategory(category) {
  return getAllCommands().filter(p => p.category === category);
}

function getCategories() {
  const cats = {};
  for (const p of getAllCommands()) {
    if (!cats[p.category]) cats[p.category] = [];
    cats[p.category].push(p);
  }
  return cats;
}

module.exports = { loadPlugins, getCommand, getAllCommands, getByCategory, getCategories };
