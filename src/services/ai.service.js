// const axios = require("axios");

// const GEMINI_URL = 
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// const getAiAnswer = async (question) => {
//   if (typeof question !== "string" || !question.trim()) {
//     throw new Error("Invalid AI question");
//   }

//   const response = await axios({
//     method: "POST",
//     url: GEMINI_URL,
//     params: {
//       key: process.env.GEMINI_API_KEY
//     },
//     headers: {
//       "Content-Type": "application/json"
//     },
//     data: {
//       contents: [
//         {
//           parts: [
//             {
//               text: question
//             }
//           ]
//         }
//       ]
//     }
//   });

//   const rawText =
//     response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

//   if (!rawText) {
//     throw new Error("No response from AI");
//   }

//   // 🔑 SINGLE WORD ENFORCEMENT
//   const singleWord = rawText
//     .replace(/[^a-zA-Z]/g, " ")
//     .trim()
//     .split(/\s+/)[0];

//   return singleWord;
// };

// module.exports = {
//   getAiAnswer
// };



// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const getAiAnswer = async (question) => {
//   // 1. Validate API Key
//   if (!process.env.GEMINI_API_KEY) {
//     throw new Error("API Key is missing in .env file");
//   }

//   // 2. Initialize AI
//   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
//   // 🔴 FIX: Use 'gemini-1.5-flash' instead of 'gemini-pro'
//   // This is the current stable, free-tier model.
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });


//   if (typeof question !== "string" || !question.trim()) {
//     throw new Error("Invalid AI question");
//   }

//   try {
//     const prompt = `Answer the following question in exactly one single word. Do not use punctuation. Question: ${question}`;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const rawText = response.text();

//     if (!rawText) throw new Error("No response from AI");

//     // Clean up response to be strictly one word
//     const singleWord = rawText
//       .replace(/[^a-zA-Z0-9]/g, " ")
//       .trim()
//       .split(/\s+/)[0];

//     return singleWord;

//   } catch (error) {
//     console.error("❌ GEMINI ERROR:", error);
//     throw new Error("AI Service Failed: " + error.message);
//   }
// };

// module.exports = { getAiAnswer };

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

const getAiAnswer = async (question) => {
  if (typeof question !== "string" || !question.trim()) {
    throw new Error("Invalid AI question");
  }

  try {
    const response = await client.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [
    {
      role: "user",
      content: `Answer the following question in exactly ONE word only. No punctuation. Question: ${question}`
    }
  ],
  max_tokens: 10,
  temperature: 0
});


    const text = response.choices[0].message.content;

    if (!text) {
      throw new Error("Empty AI response");
    }

    const singleWord = text
      .replace(/[^a-zA-Z0-9]/g, " ")
      .trim()
      .split(/\s+/)[0];

    return singleWord;

  } catch (error) {
    console.error("❌ GROQ ERROR:", error);
    throw new Error("AI Service Failed");
  }
};

module.exports = { getAiAnswer };
