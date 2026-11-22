// ============================================
// DOWNLOADER HELPERS - public APIs with fallback
// ============================================
const axios = require('axios');

const API_LIST = [
  'https://api.ryzendesu.vip/api',
  'https://api.tikwm.com/api',
  'https://api.agatz.xyz/api',
  'https://api.davidcyriltech.my.id/api',
];

async function tryApis(path, params = {}) {
  const errors = [];
  for (const base of API_LIST) {
    try {
      const url = base + path;
      const res = await axios.get(url, { params, timeout: 20000, headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.data) return res.data;
    } catch (e) {
      errors.push(e.message);
    }
  }
  throw new Error('Sab APIs fail: ' + errors.join(' | '));
}

async function downloadTikTok(url) {
  // TikWM direct (sab se reliable)
  try {
    const res = await axios.post('https://www.tikwm.com/api/', { url }, { timeout: 20000, headers: { 'User-Agent': 'Mozilla/5.0' } });
    const data = res.data?.data;
    if (data?.hdplay || data?.play) return { url: data.hdplay || data.play, title: data.title, author: data.author?.nickname };
  } catch {}
  const data = await tryApis('/download/tiktok', { url });
  return { url: data.url || data.result?.url, title: data.title || data.result?.title };
}

async function downloadInstagram(url) {
  const data = await tryApis('/download/instagram', { url });
  return { url: data.url || data.result?.url || data.download_url, title: data.title || '' };
}

async function downloadFacebook(url) {
  const data = await tryApis('/download/facebook', { url });
  return { url: data.url || data.result?.url || data.download_url, title: data.title || '' };
}

async function downloadTwitter(url) {
  const data = await tryApis('/download/twitter', { url });
  return { url: data.url || data.result?.url, title: data.title || '' };
}

async function downloadYouTube(url, type = 'audio') {
  const data = await tryApis('/download/yt', { url, type });
  return { url: data.url || data.result?.url, title: data.title || data.result?.title };
}

async function downloadSpotify(url) {
  const data = await tryApis('/download/spotify', { url });
  return { url: data.url || data.result?.url, title: data.title || '' };
}

async function scrapePinterest(url) {
  // Direct Pinterest pin scraper: og:image meta tag se image URL nikalo
  try {
    const res = await axios.get(url, {
      timeout: 25000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });
    const html = res.data || '';
    // 1) og:image
    const og = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    if (og && og[1]) return { url: og[1], title: '' };
    // 2) Pinterest JSON fallback: look for "url": "https://i.pinimg.com/..."
    const img = html.match(/https?:\/\/i\.pinimg\.com\/[^"\\]+/g);
    if (img && img.length) return { url: img[0], title: '' };
  } catch (e) {
    // fall through to API
  }
  const data = await tryApis('/download/pinterest', { url });
  return { url: data.url || data.result?.url, title: data.title || '' };
}

async function downloadPinterest(url) {
  return await scrapePinterest(url);
}

async function downloadSoundCloud(url) {
  const data = await tryApis('/download/soundcloud', { url });
  return { url: data.url || data.result?.url, title: data.title || '' };
}

async function searchYouTube(query) {
  const yts = require('youtube-yts');
  const res = await yts(query);
  return res.videos?.slice(0, 5) || [];
}

async function searchSong(query) {
  const yts = require('youtube-yts');
  const res = await yts(query);
  return res.videos?.[0] || null;
}

module.exports = {
  tryApis, downloadTikTok, downloadInstagram, downloadFacebook, downloadTwitter,
  downloadYouTube, downloadSpotify, downloadPinterest, downloadSoundCloud,
  searchYouTube, searchSong,
};
