import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

// Initialize the client only if the API key is available
if (process.env.API_KEY) {
  client = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const sendMessageToBot = async (message: string, history: string[]): Promise<string> => {
  if (!client) {
    return "I'm sorry, I'm currently offline (API Key missing). Please use the contact form or call us directly for assistance.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a context-aware prompt
    const systemInstruction = `You are "FlowBot", the helpful AI assistant for Bregan MainsFlow, an underground utility specialist company. 
    Your tone is professional, knowledgeable, and friendly. 
    
    Company Info:
    - Founded in October 2017 by David Aylott and Glenn Brett.
    - Worked on major projects including water mains for the Queen of Kuwait.
    - Preferred contractor for Clancy Group, PN Daly, and Agility Alliance.
    - Uses trenchless technology for discreet work.
    - Employees are expertly trained (City & Guilds, NVQ accredited).
    
    You can answer questions about:
    - Water mains replacement
    - Leak detection services
    - Emergency repairs (24/7 availability)
    - Commercial installations
    - Company history and values
    
    If asked about pricing, say that every project is unique and suggest they use the contact form for a quote.
    Keep answers concise (under 100 words).
    Current conversation context: ${history.join('\n')}
    `;

    const response = await client.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};