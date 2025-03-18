import OpenAI from "openai";

export const openAiClient = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});
