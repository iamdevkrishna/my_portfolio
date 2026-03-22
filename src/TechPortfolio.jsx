import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
// Reverted to Github and Linkedin to prevent the white-screen crash!
import { Download, Github, Linkedin, Terminal, Video, MapPin, Sparkles, ArrowRight, Layers, Database, ExternalLink, Award, FileText, X, Cpu, Code2, Wrench } from 'lucide-react';

const TechPortfolio = ({ fadeUp, setIsHovering }) => {
  // State to handle our pop-up document viewer
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto px-6 pt-40">

      {/* Tech Hero */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
            <Sparkles size={14} /> B.Tech CSE & AI/ML Minor
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-glow">
            Designing the future,<br /><span className="text-gray-500">Coding the present.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            I am <span className="text-white font-medium">Dev Krishna</span>. I bridge the gap between complex deep learning models and high-end visual storytelling.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#contact" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all md:cursor-none">
              Let's Connect <ArrowRight size={18} />
            </a>
            <div className="flex gap-3 ml-4">
              <a href="https://www.linkedin.com/in/dev-krishna/" target="_blank" rel="noreferrer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white transition-all md:cursor-none"><Linkedin size={20} /></a>
              <a href="https://github.com/iamdevkrishna" target="_blank" rel="noreferrer" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white transition-all md:cursor-none"><Github size={20} /></a>
            </div>
          </div>
        </motion.div>

        {/* Tech Profile Card */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-5">
          <div className="bento-card p-6" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
               <img src="/profile.jpg" alt="Dev Krishna" className="w-16 h-16 rounded-2xl object-cover shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10" />
                <div>
                  <h3 className="text-xl font-bold text-white">Dev Krishna</h3>
                  <p className="text-sm text-gray-400">AI Engineer & Full-Stack</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>AVAILABLE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bento-inner p-4"><p className="text-xs text-gray-500 font-medium mb-1 uppercase">Focus</p><p className="text-sm font-semibold text-gray-200">Deep Learning</p></div>
              <div className="bento-inner p-4"><p className="text-xs text-gray-500 font-medium mb-1 uppercase">Stack</p><p className="text-sm font-semibold text-gray-200">Python, React</p></div>
              <div className="bento-inner p-4 col-span-2 flex justify-between items-center">
                <div><p className="text-xs text-gray-500 font-medium mb-1 uppercase">Location</p><p className="text-sm font-semibold text-gray-200 flex items-center gap-2"><MapPin size={14}/> India IN</p></div>
                <span className="text-2xl">🇮🇳</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Projects */}
      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3 flex items-center justify-center gap-2"><Layers size={16}/> Portfolio</h2>
          <h3 className="text-4xl font-bold">Engineering Works</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bento-card p-8 group hover:border-indigo-500/30 transition-all duration-300 md:col-span-2" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="bento-inner w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform"><Video size={20} /></div>
            <div className="md:flex justify-between items-start gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">PlayCam | Real-Time Cricket Shot Prediction</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-3xl">Engineered a real-time deep learning system classifying cricket shots using live webcam feeds. Extracted 1662 keypoints per frame via MediaPipe, feeding an LSTM neural network.</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                  <span className="bento-inner px-3 py-1">TensorFlow (Keras)</span><span className="bento-inner px-3 py-1">LSTM</span><span className="bento-inner px-3 py-1">MediaPipe</span>
                </div>
              </div>
              <a href="https://github.com/iamdevkrishna/PlayCam-Cricket-Shot-Prediction-Model" target="_blank" rel="noreferrer" className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/10 md:cursor-none"><Github size={16} /> Repository</a>
            </div>
          </div>

          {/* P.R.I.M.E Project Card (Updated with Repo Link) */}
          <div className="bento-card p-8 group hover:border-pink-500/30 transition-all duration-300 flex flex-col justify-between" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div>
              <div className="bento-inner w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform"><Terminal size={20} /></div>
              <h3 className="text-2xl font-bold mb-3 text-white">P.R.I.M.E | AI Voice Assistant</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Developed a voice-controlled AI assistant to automate Windows tasks. Integrated the Gemini API for advanced conversational logic.</p>
            </div>

            {/* Flex wrapper for perfectly aligned tags and button */}
            <div className="flex justify-between items-end mt-4">
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bento-inner px-3 py-1">Python</span>
                <span className="bento-inner px-3 py-1">Gemini API</span>
              </div>
              <a href="https://github.com/iamdevkrishna/P.R.I.M.E-Windows-Assistant" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 md:cursor-none shrink-0 ml-4">
                <Github size={16} /> Code
              </a>
            </div>
          </div>

          {/* Freelance System Card (Updated with Placeholder Repo Link) */}
          <div className="bento-card p-8 group hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div>
              <div className="bento-inner w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform"><Database size={20} /></div>
              <h3 className="text-2xl font-bold mb-3 text-white">Freelance Collaboration System</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">Developed a backend architecture using Django to bridge the gap between freelancers and clients. Features secure login and workflow automation.</p>
            </div>

            {/* Flex wrapper for perfectly aligned tags and button */}
            <div className="flex justify-between items-end mt-4">
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                <span className="bento-inner px-3 py-1">Django</span>
                <span className="bento-inner px-3 py-1">PostgreSQL</span>
              </div>
              <a href="https://github.com/iamdevkrishna" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 md:cursor-none shrink-0 ml-4">
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Arsenal */}
      <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-3 flex items-center justify-center gap-2"><Cpu size={16}/> Arsenal</h2>
          <h3 className="text-4xl font-bold text-white">Technical Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI & Data */}
          <div className="bento-card p-8 group hover:border-indigo-500/30 transition-all duration-300" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bento-inner w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400"><Database size={18} /></div>
              <h3 className="text-xl font-bold text-white">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'Keras', 'MediaPipe', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV'].map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">{skill}</span>
              ))}
            </div>
          </div>

          {/* Core & Web */}
          <div className="bento-card p-8 group hover:border-pink-500/30 transition-all duration-300" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bento-inner w-10 h-10 rounded-xl flex items-center justify-center text-pink-400"><Code2 size={18} /></div>
              <h3 className="text-xl font-bold text-white">Development & Web</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Django', 'JavaScript', 'C++', 'HTML/CSS', 'Tailwind', 'REST APIs'].map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">{skill}</span>
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="bento-card p-8 group hover:border-teal-500/30 transition-all duration-300" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bento-inner w-10 h-10 rounded-xl flex items-center justify-center text-teal-400"><Wrench size={18} /></div>
              <h3 className="text-xl font-bold text-white">Tools & Creative</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Git & GitHub', 'PostgreSQL', 'Vercel', 'Premiere Pro', 'After Effects', 'Blender', 'DaVinci Resolve'].map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education & Certificates */}
      <motion.section id="journey" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-24 border-t border-white/5">
        <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white mb-4">Education & Certificates</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <div className="bento-card p-8 border-indigo-500/30 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full"></div>
                <p className="text-indigo-400 text-sm font-bold mb-2">Aug '23 – Present</p>
                <h3 className="text-2xl font-bold text-white mb-3">Bachelor of Technology (CSE)</h3>
                <p className="text-gray-400 font-medium mb-6">Lovely Professional University<br/>Minor in AI/ML</p>
                <div className="inline-block bento-inner px-6 py-3 rounded-xl border border-indigo-500/30 w-fit">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current CGPA</p>
                  <p className="text-3xl font-extrabold text-white tracking-tight">8.08</p>
                </div>
              </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              {/* LPU Cert Trigger */}
              <motion.div onClick={() => setSelectedDoc({ url: '/cert_lpu.jpg', title: 'Machine Learning Made Easy', isPdf: false })} whileHover={{ scale: 1.02 }} className="bento-card p-6 group cursor-pointer relative md:cursor-none">
                <Award className="text-pink-400 mb-4" size={28} />
                <h4 className="font-bold text-white mb-2">Machine Learning Made Easy</h4>
                <p className="text-sm text-gray-400 mb-4">Lovely Professional University</p>
                <ExternalLink size={14} className="absolute top-4 right-4 text-gray-600 group-hover:text-pink-400 transition-colors" />
              </motion.div>

              {/* NPTEL Cert Trigger */}
              <motion.div onClick={() => setSelectedDoc({ url: '/cert_nptel.jpg', title: 'Cloud Computing', isPdf: false })} whileHover={{ scale: 1.02 }} className="bento-card p-6 group cursor-pointer relative md:cursor-none">
                <Award className="text-indigo-400 mb-4" size={28} />
                <h4 className="font-bold text-white mb-2">Cloud Computing</h4>
                <p className="text-sm text-gray-400 mb-4">NPTEL (IIT Kharagpur)</p>
                <ExternalLink size={14} className="absolute top-4 right-4 text-gray-600 group-hover:text-indigo-400 transition-colors" />
              </motion.div>

              {/* Udemy Cert Trigger */}
              <motion.div onClick={() => setSelectedDoc({ url: '/cert_udemy.jpg', title: 'Build Generative AI Apps', isPdf: false })} whileHover={{ scale: 1.02 }} className="bento-card p-6 sm:col-span-2 group cursor-pointer relative md:cursor-none">
                <Award className="text-teal-400 mb-4" size={28} />
                <h4 className="font-bold text-white mb-2">Build Generative AI Apps</h4>
                <p className="text-sm text-gray-400 mb-4">Udemy | No-Code Tools Focus</p>
                <ExternalLink size={14} className="absolute top-4 right-4 text-gray-600 group-hover:text-teal-400 transition-colors" />
              </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section id="resume" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-32 border-t border-white/5 text-center">
        <div className="flex flex-col items-center justify-center" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 shadow-lg"><FileText size={32} className="text-gray-300" /></div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">My Resume</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">If you want the full picture — experience, projects, skills, all of it — my resume's right here.</p>

          {/* Resume Modal Trigger */}
          <button
            onClick={() => setSelectedDoc({ url: '/resume.pdf', title: 'Dev Krishna - Resume', isPdf: true })}
            className="bg-[#f2f2e6] text-black px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 md:cursor-none"
          >
            <Download size={20} /> View Resume
          </button>
        </div>
      </motion.section>

      {/* ========================================== */}
      {/* THE POP-UP VIEWER MODAL (PORTAL FIX)  */}
      {/* ========================================== */}
      {selectedDoc && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10" onMouseEnter={() => setIsHovering(false)}>
          <div className="relative w-full max-w-5xl h-[85vh] bg-neutral-900 rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-neutral-950">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <FileText size={18} className="text-gray-400" />
                {selectedDoc.title}
              </h3>
              <button onClick={() => setSelectedDoc(null)} className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full md:cursor-none">
                <X size={20} />
              </button>
            </div>

            {/* Content (PDF or Image) */}
            <div className="flex-grow w-full h-full bg-neutral-800 flex items-center justify-center overflow-auto p-2 md:p-6">
              {selectedDoc.isPdf ? (
                <iframe src={selectedDoc.url} className="w-full h-full border-none rounded shadow-sm bg-white" title={selectedDoc.title} />
              ) : (
                <img src={selectedDoc.url} alt={selectedDoc.title} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5" />
              )}
            </div>

          </div>
        </div>,
        document.body
      )}

    </motion.div>
  );
};

export default TechPortfolio;