import { GoogleGenAI } from "@google/genai";

export const sendMessageToBot = async (message: string, history: string[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
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

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    if (!process.env.API_KEY) {
      return "I'm currently offline (API Key missing). Please contact our team directly at info@breganmainsflow.com.";
    }
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};