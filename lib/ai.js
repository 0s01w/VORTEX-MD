// ============================================
// GEMINI AI - Free API wrapper
// Key: https://aistudio.google.com/app/apikey
// ============================================
const settings = require('../config/settings');

let client = null;
function getClient() {
  if (!settings.geminiApiKey || settings.geminiApiKey === 'AIzaSy_your_key_here') {
    return null;
  }
  if (!client) {
    const { GoogleGenAI } = require('@google/genai');
    client = new GoogleGenAI({ apiKey: settings.geminiApiKey });
  }
  return client;
}

async function askAI(prompt, systemInstruction = 'You are a helpful WhatsApp bot assistant. Reply in the same language as the user. Keep answers concise and friendly.') {
  const ai = getClient();
  if (!ai) {
    return '❌ Gemini API key set nahi hai. .env file mein GEMINI_API_KEY add karo. Key yahan se lo: https://aistudio.google.com/app/apikey';
  }
  try {
    const response = await ai.models.generateContent({
      model: settings.geminiModel,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });
    return response.text || 'Koi jawab nahi mila.';
  } catch (e) {
    return '❌ AI error: ' + e.message;
  }
}

async function summarizeText(text) {
  return askAI('Summarize this text in short bullet points:\n\n' + text.slice(0, 8000));
}

async function translateText(text, targetLang = 'Urdu') {
  return askAI(`Translate this to ${targetLang}:\n\n${text}`);
}

async function explainImage(imageBuffer, mimeType = 'image/jpeg') {
  const ai = getClient();
  if (!ai) return '❌ Gemini API key set nahi hai.';
  try {
    const response = await ai.models.generateContent({
      model: settings.geminiModel,
      contents: [
        { inlineData: { mimeType, data: imageBuffer.toString('base64') } },
        'Describe this image in detail.',
      ],
    });
    return response.text || 'Image samajh nahi aayi.';
  } catch (e) {
    return '❌ Image analysis error: ' + e.message;
  }
}

module.exports = { askAI, summarizeText, translateText, explainImage, getClient };
