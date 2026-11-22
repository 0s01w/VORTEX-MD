// ============================================
// STICKER MAKER - image/video se sticker
// ============================================
const sharp = require('sharp');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const settings = require('../config/settings');

async function imageToSticker(buffer) {
  try {
    const sticker = new Sticker(buffer, {
      pack: settings.botName,
      author: settings.botOwner,
      type: StickerTypes.FULL,
      categories: ['🤖'],
      id: '12345',
      quality: 70,
      background: 'transparent',
    });
    return await sticker.toBuffer();
  } catch (e) {
    // Fallback: sharp se resize karke webp
    return await sharp(buffer).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 80 }).toBuffer();
  }
}

async function textToSticker(text) {
  // Text sticker: canvas jaisa effect sharp se nahi, simple image banate hain
  // Yahan hum text ko image mein convert karne ke liye jimp use karte hain
  const Jimp = require('jimp');
  const img = new Jimp(512, 512, 0x00000000);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  img.print(font, 20, 200, text.slice(0, 100));
  const buffer = await img.getBufferAsync('image/png');
  return imageToSticker(buffer);
}

module.exports = { imageToSticker, textToSticker };
