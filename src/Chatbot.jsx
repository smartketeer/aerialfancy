import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Sparkles, Workflow, FolderGit2, 
  Calendar, HelpCircle 
} from 'lucide-react';
import { getSystemPrompt } from './data/chatbot-prompt';

const ThinkingProcess = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const totalSteps = 5;
    if (step < totalSteps - 1) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 700); // Move to next step every 700ms
      return () => clearTimeout(timer);
    }
  }, [step]);

  const allSteps = [
    'Analyzing your request',
    'Identifying key details',
    'Finding relevant information',
    'Reviewing gathered information',
    'Generating the response..'
  ];

  return (
    <div className="flex justify-start w-full mb-2">
      <div className="bg-white/80 dark:bg-[#1A2333]/80 backdrop-blur-md rounded-2xl rounded-tl-sm px-5 py-4 flex flex-col gap-3 shadow-sm border border-primary/5 dark:border-white/5 w-full max-w-[95%]">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="font-bold text-primary dark:text-white text-sm">Aero AI</span>
        </div>
        <div className="flex flex-col gap-3 pl-1">
          {allSteps.map((text, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-3 text-[13px] transition-all duration-300 ${
                index <= step ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden m-0'
              }`}
            >
              {index < 4 ? (
                <svg className={`w-4 h-4 flex-shrink-0 ${index < step ? 'text-primary/80 dark:text-white/80' : 'text-primary/40 dark:text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 flex-shrink-0 text-primary/80 dark:text-white/80 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )}
              <span className={`${index < step ? 'text-primary/60 dark:text-white/60' : 'text-primary/80 dark:text-white/80'}`}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! I am Aero, the AI assistant for AerialFancy. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: 'Startup Packages', icon: Sparkles, prompt: 'What package do you recommend for an early-stage startup?' },
    { label: 'How We Work', icon: Workflow, prompt: 'What is your 4-step development and design process?' },
    { label: 'Portfolio', icon: FolderGit2, prompt: 'Can you show me your previous projects and portfolio?' },
    { label: 'Book Call', icon: Calendar, prompt: 'How do I schedule a 15-minute discovery call?' },
    { label: 'FAQs', icon: HelpCircle, prompt: 'What are your payment terms and warranty after launch?' }
  ];

  // --- Rate Limiting Logic ---
  const MESSAGE_LIMIT = 15; // Max messages per period
  const RESET_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in ms
  const [isRateLimited, setIsRateLimited] = useState(false);

  const getUsageData = () => {
    const data = localStorage.getItem('aero_chat_usage');
    if (data) {
      const parsed = JSON.parse(data);
      if (Date.now() > parsed.resetTime) {
        return { count: 0, resetTime: Date.now() + RESET_INTERVAL };
      }
      return parsed;
    }
    return { count: 0, resetTime: Date.now() + RESET_INTERVAL };
  };

  useEffect(() => {
    const usage = getUsageData();
    if (usage.count >= MESSAGE_LIMIT) {
      setIsRateLimited(true);
    }
  }, [isOpen]); 
  // ---------------------------

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendUserMessage = async (textToSend) => {
    if (!textToSend.trim() || isLoading) return;

    const usage = getUsageData();
    if (usage.count >= MESSAGE_LIMIT) {
      setIsRateLimited(true);
      setMessages(prev => [...prev, { role: 'user', content: textToSend }, { role: 'assistant', content: '**Usage Limit Reached** \n\nYou have reached the maximum number of messages for today. To protect our service, we limit the number of chat messages per visitor. \n\nPlease try again tomorrow, or use our **Contact Us** form below!' }]);
      setInput('');
      return;
    }

    const userMessage = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Increment Usage Count
      const currentUsage = getUsageData();
      localStorage.setItem('aero_chat_usage', JSON.stringify({
        count: currentUsage.count + 1,
        resetTime: currentUsage.resetTime
      }));

      // Call OpenRouter API directly
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'AerialFancy Digital Agency Assistant',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          max_tokens: 1000,
          messages: [
            { role: 'system', content: getSystemPrompt() },
            ...messages,
            userMessage
          ]
        })
      });

      if (!response.ok) throw new Error('API Request Failed');

      const data = await response.json();
      let botContent = data.choices[0].message.content;

      // Handle Scroll Commands
      const scrollMatch = botContent.match(/\[SCROLL_TO_([A-Z_]+)\]/);
      if (scrollMatch) {
        const target = scrollMatch[1];
        botContent = botContent.replace(/\[SCROLL_TO_[A-Z_]+\]/, '').trim();
        
        const sectionMap = {
          SERVICES: 'services',
          WHY_US: 'why-us',
          PROCESS: 'process',
          TECH: 'tech-stack',
          WORK: 'featured-work',
          PACKAGES: 'packages',
          FAQ: 'faq',
          CONTACT: 'contact'
        };

        const targetId = sectionMap[target];
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: botContent }]);
    } catch (err) {
      console.error('Chatbot API Error:', err);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Sorry, I am having trouble connecting to the network right now. Please feel free to email our team directly at info@aerialfancy.site or use our contact form!' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendUserMessage(input);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle chat"
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <svg 
          className={`w-6 h-6 absolute transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        {/* Unread dot / ping */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-secondary"></span>
          </span>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-[400px] h-[580px] max-h-[82vh] rounded-3xl glass-panel border border-primary/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  Aero Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[11px] text-white/80">AerialFancy AI Consultant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50 dark:bg-[#252F43]/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed overflow-hidden ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-tr-sm' 
                    : 'glass-panel dark:bg-white/5 border border-primary/5 dark:border-white/5 text-primary dark:text-white rounded-tl-sm shadow-sm'
                }`}>
                  <div className={`flex flex-col gap-2 ${msg.role === 'user' ? '[&>ul]:list-inside [&>ol]:list-inside' : '[&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4 [&_strong]:font-bold [&_a]:text-secondary [&_a]:underline hover:[&_a]:text-secondary/80'}`}>
                    <ReactMarkdown
                      components={{
                        a: ({node, ...props}) => <a target="_blank" rel="noopener noreferrer" {...props} />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && <ThinkingProcess />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Prompt Pills */}
          <div className="px-3 py-2 bg-white/80 dark:bg-[#1A2333]/90 border-t border-primary/5 dark:border-white/5 overflow-x-auto flex gap-1.5 scrollbar-hide">
            {quickPrompts.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => sendUserMessage(item.prompt)}
                  disabled={isLoading || isRateLimited}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-medium bg-primary/5 hover:bg-primary/10 dark:bg-white/5 dark:hover:bg-white/15 text-primary dark:text-white/90 border border-primary/10 dark:border-white/10 transition-all hover:scale-[1.02] shrink-0 disabled:opacity-50 inline-flex items-center gap-1.5"
                >
                  <IconComp className="w-3 h-3 text-secondary shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-[#1A2333] border-t border-primary/5 dark:border-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isRateLimited ? "Message limit reached for today" : "Ask me anything..."}
              className="flex-1 bg-surface/50 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-full px-4 py-2 text-sm text-primary dark:text-white dark:placeholder:text-white/40 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all disabled:opacity-50"
              disabled={isLoading || isRateLimited}
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isLoading || isRateLimited}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full text-white shadow-[0_8px_20px_rgba(57,62,70,0.3)] transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'bg-primary hover:bg-primary/90 scale-90' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_8px_25px_rgba(146,154,171,0.5)] hover:-translate-y-1 hover:scale-105'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  );
}
