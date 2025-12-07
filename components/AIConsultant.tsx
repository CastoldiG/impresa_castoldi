import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Ciao! Sono l'Assistente Virtuale di NovaCostruzioni. Posso aiutarti con preventivi stimati, idee di ristrutturazione o informazioni sui materiali. Come posso esserti utile oggi?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 p-1.5 rounded-full">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Nova AI Expert</h3>
                <p className="text-xs text-slate-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                  Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-amber-500 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Chiedi un preventivo o un consiglio..."
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-transparent focus:bg-white focus:border-amber-500 rounded-xl text-sm focus:ring-0 transition-all outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all ${
                  input.trim() 
                    ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-slate-400">Powered by Gemini AI • Le stime sono indicative</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center bg-slate-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105"
        >
          <div className="relative mr-3">
             <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20"></div>
             <div className="relative bg-amber-500 p-2 rounded-full">
               <Sparkles size={20} className="text-white" />
             </div>
          </div>
          <span className="font-semibold pr-2">Assistente Virtuale</span>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;