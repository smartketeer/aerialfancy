import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const usage = getUsageData();
    if (usage.count >= MESSAGE_LIMIT) {
      setIsRateLimited(true);
      setMessages(prev => [...prev, { role: 'user', content: input }, { role: 'assistant', content: '⚠️ **Usage Limit Reached** \n\nYou have reached the maximum number of messages for today. To protect our service, we limit the number of chat messages per visitor. \n\nPlease try again tomorrow, or use our **Contact Us** form below!' }]);
      setInput('');
      return;
    }

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Increment usage count on sending
      usage.count += 1;
      localStorage.setItem('aero_chat_usage', JSON.stringify(usage));
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'AerialFancy Digital Agency',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          max_tokens: 1000,
          messages: [
            { 
              role: 'system', 
              content: 'You are Aero, the highly professional and formal AI assistant for AerialFancy. AerialFancy is a premier digital agency offering Custom Web Development, Cross-Platform Mobile Apps, and UI/UX Digital Design.\n\nCRITICAL FORMATTING RULE: Always structure your responses professionally. Use markdown, bullet points, and short paragraphs to make information highly readable. Never deliver long, dense paragraphs.\n\nAerialFancy Core Tech Stack (Use this strictly when asked about what technologies or stacks we use, and always present it cleanly as a bulleted list):\n- **Web Development**: React, Next.js, Vite, TailwindCSS, Node.js, Laravel, Java, HTML5, CSS3, JavaScript.\n- **Mobile Development**: Flutter, React Native, iOS, Android.\n- **UI/UX Design**: Figma, Canva, UI/UX, Wireframing, Prototyping.\n- **Infrastructure & Tools**: GitHub, Vercel, Hostinger, Git, CI/CD.\n\nAerialFancy offers the following Service Packages:\n- Atmo (The Launchpad): $1.8k - $3.5k, 2-4 weeks. Best for startups, basic wireframing, 1-5 page responsive website, basic social media setup.\n- Strato (The Professional Suite): $6k - $13.5k, 6-10 weeks. Best for growing businesses. Choice of Full-stack web app OR MVP mobile app, 2-3 social media platforms managed.\n- Exo (The Enterprise Solution): $16.5k - $32k+, 3-6+ months. Best for established companies. Dual-delivery of robust web platform and feature-rich mobile suite (iOS & Android). High-end video production.\n- Nova (The Ongoing Partnership): $3k - $6k / mo retainer. Dedicated off-site CTO and creative marketing department. Continuous tech support, full social media management.\n- Nebula (The Bespoke Build): Custom quote. For highly specialized workflows and custom architecture.\n\nAerialFancy Official Links (You are encouraged to share these if asked. IMPORTANT: Always format URLs as clickable Markdown links, e.g. [LinkedIn](https://www.linkedin.com/company/aerial-fancy-web-solutions)):\n- [LinkedIn](https://www.linkedin.com/company/aerial-fancy-web-solutions)\n- [Instagram](https://instagram.com/aerialfancy)\n- [Facebook](https://facebook.com/aerialfancy)\n- [Portfolio/Website](https://aerialfancy.com)\n\nCRITICAL RULE: You must ONLY answer questions related to AerialFancy, its services, packages, team, or hiring the agency. Do NOT answer general coding questions.\n\nSPECIAL NAVIGATION COMMANDS:\nIf the user asks about specific areas of our website, you can physically scroll their screen to that section by including exactly ONE of the following commands at the VERY END of your message:\n[SCROLL_TO_SERVICES] - use when asking about what services we provide\n[SCROLL_TO_TECH] - use when asking about our tech stack or frameworks\n[SCROLL_TO_WORK] - use when asking about our previous projects, portfolio, or featured work\n[SCROLL_TO_PACKAGES] - use when asking about our pricing, plans, or packages\n[SCROLL_TO_CONTACT] - use when asking to get in touch or contact us\n\nFor example: "We have five packages starting at $1.8k. [SCROLL_TO_PACKAGES]"'
            },
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
        const sectionMap = {
          'SERVICES': 'services',
          'TECH': 'tech-stack',
          'WORK': 'our-work',
          'PACKAGES': 'packages',
          'CONTACT': 'contact'
        };
        const sectionId = sectionMap[scrollMatch[1]];
        if (sectionId) {
          setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
        // Remove the command from the visible text
        botContent = botContent.replace(/\[SCROLL_TO_([A-Z_]+)\]/g, '').trim();
      }

      const botMessage = { role: 'assistant', content: botContent };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please try again later!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] max-h-[70vh] flex flex-col glass-panel dark:bg-[#1A2333]/95 rounded-2xl shadow-2xl border border-primary/10 dark:border-white/10 overflow-hidden animate-fade-in-up origin-bottom-right" style={{ animationDuration: '0.3s' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-sm">Aero AI</h3>
                <p className="text-xs text-white/80">AerialFancy Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
