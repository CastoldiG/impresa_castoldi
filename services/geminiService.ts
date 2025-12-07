import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey: API_KEY });

// System instruction for the construction expert persona
const SYSTEM_INSTRUCTION = `
Sei un assistente virtuale esperto e cortese di "NovaCostruzioni", un'impresa edile italiana di alto livello.
Il tuo compito è aiutare i potenziali clienti con dubbi su ristrutturazioni, costruzioni, materiali e normative edilizie.

Linee guida:
1. Sii professionale, rassicurante e preciso.
2. Se ti chiedono preventivi, dai stime *molto approssimative* basate sui prezzi medi di mercato in Italia, ma specifica SEMPRE che per un prezzo preciso è necessario un sopralluogo tecnico gratuito.
3. Promuovi i valori dell'azienda: sicurezza, efficienza energetica, qualità dei materiali e rispetto delle scadenze.
4. Rispondi in italiano.
5. Sii conciso ma esaustivo.

Non inventare fatti su progetti specifici dell'azienda che non conosci, rimanda al portfolio o al contatto diretto.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Mi dispiace, la chiave API non è configurata. Contatta l'amministratore.";
  }

  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "Mi dispiace, non ho capito. Puoi ripetere?";
  } catch (error) {
    console.error("Errore Gemini:", error);
    return "Si è verificato un errore temporaneo. Riprova tra poco.";
  }
};