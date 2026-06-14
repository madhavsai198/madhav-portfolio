import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

// Smart local responses about Madhav — no backend needed
const getReply = (message) => {
  const msg = message.toLowerCase().trim();

  if (msg.includes('resume') || msg.includes('cv')) {
    return "You can view Madhav's resume here 👉 https://flowcv.com/resume/hsr4bwaov2sf — it's always up to date!";
  }
  if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('hire') || msg.includes('connect')) {
    return "You can reach Madhav at:\n📧 madhavsaiv789@gmail.com\n📞 +91 6301408907\n💬 WhatsApp: wa.me/916301408907\n💼 LinkedIn: linkedin.com/in/madhavsaiv789";
  }
  if (msg.includes('github')) {
    return "Madhav's GitHub is at github.com/madhavsai198 — check out his projects including JoSAA AI Counsellor, BorrowEase, Ravi Cycle Co., and Cafe Bistro Website!";
  }
  if (msg.includes('linkedin')) {
    return "Connect with Madhav on LinkedIn at linkedin.com/in/madhavsaiv789 for professional opportunities and collaborations!";
  }
  if (msg.includes('project') || msg.includes('work') || msg.includes('built') || msg.includes('portfolio')) {
    return "Madhav has built several impressive projects:\n\n🤖 JoSAA AI Counsellor — Gemini AI-powered college counseling\n💰 BorrowEase — Peer-to-peer lending platform\n🚲 Ravi Cycle Co. — E-commerce storefront\n☕ Cafe Bistro — High-performance cafe website\n\nScroll to the Projects section to explore them!";
  }
  if (msg.includes('josaa') || msg.includes('counsellor') || msg.includes('jee') || msg.includes('college')) {
    return "JoSAA AI Counsellor is Madhav's flagship project — an intelligent platform that gives specific, rank-based branch and college recommendations for JEE aspirants using Gemini AI. Live at: josaa-buddy.vercel.app";
  }
  if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('language') || msg.includes('framework')) {
    return "Madhav's core tech stack includes:\n\n⚛️ Frontend: React, Next.js, Tailwind CSS, Framer Motion\n🟢 Backend: Node.js, Express.js\n🍃 Database: MongoDB\n🤖 AI: Gemini AI, LLM Integration\n🛠️ Tools: Git, Vite, REST APIs";
  }
  if (msg.includes('experience') || msg.includes('sitezy') || msg.includes('job') || msg.includes('work')) {
    return "Madhav works as a Full Stack Engineer at Sitezy (2025–Present), building websites and digital solutions for external businesses. He's also Finance Head at the Media Council Club at NIAT.";
  }
  if (msg.includes('education') || msg.includes('college') || msg.includes('niat') || msg.includes('btech') || msg.includes('cgpa') || msg.includes('gpa')) {
    return "Madhav is pursuing B.Tech in Computer Science & Engineering at NIAT (2024–2028) with an outstanding CGPA of 9.77! 🎓";
  }
  if (msg.includes('about') || msg.includes('who') || msg.includes('madhav') || msg.includes('yourself')) {
    return "Madhav Sai Vemuri is a passionate Full Stack Developer & AI Engineer pursuing B.Tech CSE at NIAT with a 9.77 CGPA. He specializes in MERN stack development and AI integrations, building real-world scalable applications. He's also Finance Head at the Media Council Club!";
  }
  if (msg.includes('whatsapp') || msg.includes('phone') || msg.includes('call') || msg.includes('number')) {
    return "You can WhatsApp or call Madhav directly at +91 6301408907. Click the WhatsApp button in the Contact section for an instant chat! 💬";
  }
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('hii')) {
    return "Hey there! 👋 I'm Ask Madhav AI. I can tell you about Madhav's skills, projects, experience, and how to contact him. What would you like to know?";
  }
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('great') || msg.includes('awesome')) {
    return "You're welcome! 😊 Feel free to ask anything else about Madhav, or head to the Contact section to get in touch with him directly!";
  }
  if (msg.includes('available') || msg.includes('freelance') || msg.includes('internship') || msg.includes('opportunity')) {
    return "Madhav is open to internships, freelance projects, and full-time opportunities! Reach out at madhavsaiv789@gmail.com or connect on LinkedIn at linkedin.com/in/madhavsaiv789 🚀";
  }

  // Default fallback
  return "I can help you learn about Madhav's projects, skills, experience, or how to contact him. Try asking:\n• 'What projects has he built?'\n• 'What are his skills?'\n• 'How can I contact him?'\n• 'Show me his resume'";
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! 👋 I'm Ask Madhav AI. Ask me anything about Madhav's skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate a short thinking delay for natural feel
    setTimeout(() => {
      const reply = getReply(userMessage.content);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] z-40 hover:scale-105 transition-transform border border-white/20 ${isOpen ? 'hidden' : 'block'}`}
      >
        <FiMessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] bg-[#050505] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0a0a0a] border-b border-white/5 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">AI</div>
                <div>
                  <h3 className="font-semibold text-sm">Ask Madhav AI</h3>
                  <p className="text-xs text-green-500 font-medium">● Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors">
                <FiX size={18} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505]">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-white text-black rounded-tr-sm'
                      : 'bg-[#111] text-gray-200 border border-white/5 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#111] border border-white/5 p-3 rounded-xl rounded-tl-sm flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-[#050505] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap">
              {['About Madhav', 'His Projects', 'View Resume', 'Contact Info'].map(action => (
                <button
                  key={action}
                  onClick={() => {
                    setInput(action);
                    setTimeout(() => {
                      const reply = getReply(action);
                      setMessages(prev => [...prev, { role: 'user', content: action }, { role: 'assistant', content: reply }]);
                      setInput('');
                    }, 100);
                  }}
                  className="px-3 py-1.5 bg-[#111] hover:bg-[#1a1a1a] border border-white/10 rounded-full text-xs text-gray-300 transition-colors shrink-0"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#0a0a0a] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder-gray-600"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
