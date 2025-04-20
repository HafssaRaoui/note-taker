// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');

function main() {
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  const data = {
    generationConfig,
    contents: [
      {
        role: 'user',
        parts: [
          { text: 'INSERT_INPUT_HERE' },
        ],
      },
    ],
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const options = {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(data)
  };

  const response = UrlFetchApp.fetch(url, options);
  console.log(response.getContentText());
}