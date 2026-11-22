// setprofile - Bot ki profile picture set karo (Pinterest URL ya reply image par, text overlay ke saath)
module.exports = {
  name: 'setprofile',
  alias: ['ppset', 'setpp'],
  category: 'owner',
  desc: 'Bot ki profile picture set karo (Pinterest link ya image reply karein)',

  execute: async (ctx) => {
    const { sock, msg, jid, args, query, sender, isOwner, reply } = ctx;
    const { downloadPinterest } = require('../../lib/downloader');
    const { getBuffer } = require('../../lib/myfunc');

    if (!isOwner) return reply('🔒 Sirf owner ye command chala sakta hai.');

    const url = args[0] || query;
    let buf = null;

    // Image source: Pinterest URL ya replied image
    if (url) {
      await reply('⏳ Pinterest se image download ho rahi hai...');
      try {
        const res = await downloadPinterest(url);
        if (!res.url) return reply('❌ Pinterest se image nahi mili.');
        buf = await getBuffer(res.url);
      } catch (e) {
        return reply('❌ Pinterest download error: ' + e.message);
      }
    } else if (msg.message?.image) {
      await reply('⏳ Image process ho rahi hai...');
      const media = await sock.downloadAndSaveMediaMessage(msg);
      const fs = require('fs');
      buf = fs.readFileSync(media);
    } else {
      return reply('❌ Usage: .setprofile <Pinterest link>\nYa kisi image ka reply dekar .setprofile likhein.');
    }

    // Text overlay lagao (bot ka naam)
    const text = 'VORTEX-MD';
    try {
      const sharp = require('sharp');
      const image = sharp(buf);
      const meta = await image.metadata();
      const fontSize = Math.max(24, Math.round(meta.width / 12));
      const textWidth = Math.round(meta.width * 0.9);

      // Bottom-center text with dark background strip
      await image
        .resize({ width: Math.min(meta.width, 1024), withoutEnlargement: true })
        .extend({
          top: 0,
          bottom: 80,
          left: 0,
          right: 0,
          background: { r: 0, g: 0, b: 0, alpha: 0.5 },
        })
        .overlayWith(
          Buffer.from(
            `<svg width="${meta.width}" height="80"><rect width="100%" height="100%" fill="black" fill-opacity="0.5"/><text x="50%" y="58" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="${fontSize}" fill="white">${text}</text></svg>`
          ),
          { gravity: 'south' }
        )
        .toBuffer()
        .then((out) => { buf = out; });
    } catch (e) {
      // sharp fail ho to bina text ke chalo
      console.log('Text overlay skipped:', e.message);
    }

    // Bot ki profile picture update karein
    try {
      const ownJid = sock.user.id; // bot ka apna JID
      await sock.updateProfilePicture(ownJid, buf);
      await reply('✅ Bot ki profile picture set kar di gayi!\n📛 Naam: VORTEX-MD');
    } catch (e) {
      await reply('❌ Profile picture set nahi ho payi: ' + e.message);
    }
  },
};
