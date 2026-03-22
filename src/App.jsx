import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Send, Loader2, CheckCircle2, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

import TechPortfolio from './TechPortfolio';
import CreativePortfolio from './CreativePortfolio';
import Particles from './Particles';

const App = () => {
  // ==========================================
  // LOCAL STORAGE: REMEMBER THE ACTIVE PAGE
  // ==========================================
  const [activeMode, setActiveMode] = useState(() => {
    // Check if the browser remembers a mode, otherwise default to 'tech'
    const savedMode = localStorage.getItem('portfolioMode');
    return savedMode ? savedMode : 'tech';
  });

  // Save to browser memory every time you switch modes
  useEffect(() => {
    localStorage.setItem('portfolioMode', activeMode);
  }, [activeMode]);

  // ==========================================
  // FORCE SCROLL TO TOP ON RELOAD
  // ==========================================
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // A slight timeout ensures React has finished drawing the page before forcing scroll
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  // Contact Form State
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // Fast Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 50, stiffness: 2000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Switches mode and scrolls to the top of the page smoothly
  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // EmailJS Submit Handler
 const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true);

  // Pulling the variables from the .env file
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
    .then((result) => {
        setIsSending(false);
        setIsSent(true);
        e.target.reset();
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        console.log(error.text);
        setIsSending(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
    });
};

  return (
    <div className={`min-h-screen relative pb-10 md:cursor-none transition-colors duration-700 ${activeMode === 'tech' ? 'bg-[#050505] text-[#ededed]' : 'bg-black text-white'}`}>

      <Particles />

      {/* ULTRA-FAST DYNAMIC CURSOR */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[100] mix-blend-screen hidden md:flex items-center justify-center backdrop-blur-sm ${activeMode === 'tech' ? 'border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.6)]' : 'border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'}`}
        style={{ x: cursorXSpring, y: cursorYSpring }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? (activeMode === 'tech' ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)") : "transparent"
        }}
        transition={{ scale: { type: "tween", duration: 0.2 } }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
      </motion.div>

      {/* DYNAMIC NAVBAR */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-4 md:gap-8 bento-card px-6 py-3 shadow-2xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>

          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">Dev K.</span>

          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-400">
            {activeMode === 'tech' ? (
              <>
                <a href="#about" className="hover:text-white transition-colors md:cursor-none">About</a>
                <a href="#projects" className="hover:text-white transition-colors md:cursor-none">Work</a>
                <a href="#journey" className="hover:text-white transition-colors md:cursor-none">Journey</a>
              </>
            ) : (
              <>
                <a href="#studio" className="hover:text-white transition-colors md:cursor-none">Studio</a>
                <a href="#showreels" className="hover:text-white transition-colors md:cursor-none">Showreels</a>
                <a href="#services" className="hover:text-white transition-colors md:cursor-none">Services</a>
              </>
            )}
          </div>

          <div className="hidden md:block w-px h-5 bg-white/20 mx-2"></div>

          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button onClick={() => handleModeSwitch('tech')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all md:cursor-none ${activeMode === 'tech' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>AI & Code</button>
            <button onClick={() => handleModeSwitch('creative')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all md:cursor-none ${activeMode === 'creative' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}>VFX & Motion</button>
          </div>

          <div className="hidden md:block w-px h-5 bg-white/20 mx-2"></div>

          <a href="#contact" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] md:cursor-none">Book a Call</a>
        </div>
      </nav>

      {/* PAGE ROUTING */}
      <div className="relative z-10">
        {activeMode === 'tech' ? <TechPortfolio fadeUp={fadeUp} setIsHovering={setIsHovering} /> : <CreativePortfolio fadeUp={fadeUp} setIsHovering={setIsHovering} />}
      </div>

      {/* SLEEK CONTACT FORM SECTION */}
      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className={`p-8 md:p-12 rounded-3xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 ${activeMode === 'tech' ? 'bento-card' : 'bg-neutral-950 border border-white/10'}`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>

          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/10 to-transparent blur-[80px] rounded-full z-0 pointer-events-none"></div>

          {/* Left Text */}
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Let's build the <br/><span className={activeMode === 'tech' ? 'gradient-text' : 'text-gray-400'}>future.</span></h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you need complex AI/ML backend logic engineered, or a high-end VFX commercial rendered, drop me a line.
            </p>
            <div className="text-sm font-medium text-gray-500">
              <p>📍 Based in India</p>
              <p className="mt-2 flex items-center gap-2"><Mail size={16}/> devyadavofficial02@gmail.com</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative z-10 bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                <input type="text" name="user_name" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors md:cursor-none" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Email</label>
                <input type="email" name="user_email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors md:cursor-none" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea name="message" required rows="4" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none md:cursor-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" disabled={isSending} className={`mt-2 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all md:cursor-none ${isSent ? 'bg-green-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]'}`}>
                {isSending ? <Loader2 size={18} className="animate-spin" /> : (isSent ? <CheckCircle2 size={18} /> : <Send size={18} />)}
                {isSending ? "Sending..." : (isSent ? "Message Sent!" : "Send Message")}
              </button>
              {error && <p className="text-red-400 text-xs text-center mt-2">Oops! Something went wrong. Please try again.</p>}
            </form>
          </div>

        </div>
      </motion.section>

    </div>
  );
};

export default App;