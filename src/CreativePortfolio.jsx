import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, MonitorPlay, Film, Scissors, Globe, ChevronDown, Loader2 } from 'lucide-react';
import Papa from 'papaparse';

const CreativePortfolio = ({ fadeUp, setIsHovering }) => {
  const [videoDatabase, setVideoDatabase] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // FETCH LIVE DATA FROM GOOGLE SHEETS
  // ==========================================
// ==========================================
  // FETCH LIVE DATA FROM GOOGLE SHEETS
  // ==========================================
  useEffect(() => {
    // Your live Google Sheets CSV link
    const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTw68rfT_fvBAwDt8yl0G3K6XmKnFe0qhkxDbMeCAGpZaGkQgZVBdK-gNBFxYKUggcgni25aPZCG_h6/pub?gid=2098154320&single=true&output=csv";

    Papa.parse(sheetURL, {
      download: true,
      header: true,
      transformHeader: (header) => header.trim(), // <--- THIS CLEANS INVISIBLE SPACES
      complete: (results) => {
        // Log the first video to the console so you can see exactly what data is arriving
        console.log("Cleaned Data Received:", results.data[0]);

        // 1. Filter out empty rows just in case
        const validData = results.data.filter(video => video.Title && video.URL);

        // 2. Safely create a copy of the array and reverse it
        const reversedData = [...validData].reverse();

        // 3. Save to state
        setVideoDatabase(reversedData);
        setIsLoading(false);
      },
      error: (err) => {
        console.error("Error fetching videos:", err);
        setIsLoading(false);
      }
    });
  }, []);

  const loadMore = () => {
    setVisibleVideos(prev => prev + 4);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full">

      {/* Cinematic Hero */}
      <section id="studio" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black/80 to-black/90 z-0"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 max-w-4xl mx-auto mt-16">
          <p className="text-gray-400 tracking-[0.3em] uppercase text-sm mb-6 font-semibold flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gray-600"></span> Scenoxis Creative <span className="w-8 h-px bg-gray-600"></span>
          </p>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase" style={{ textShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            Visuals that <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Demand Attention.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            High-end video editing, dynamic motion graphics, and CGI/VFX. Engineered for impact and tailored for global clients.
          </p>
        </motion.div>
      </section>

      {/* 2-Column Cinematic Video Grid */}
      <section id="showreels" className="px-6 md:px-12 pb-24 max-w-[1700px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3 flex items-center justify-center gap-2"><Layers size={16}/> Showreels</h2>
          <h3 className="text-4xl font-bold text-white">Featured Work</h3>
        </div>

        {isLoading ? (
          // Loading State
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 size={40} className="text-gray-500 animate-spin mb-4" />
            <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">Syncing with Server...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {videoDatabase.slice(0, visibleVideos).map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden relative border border-white/5 transition-all group-hover:border-white/20 shadow-xl group-hover:scale-[1.02]">
                    <iframe className="w-full h-full" src={video.URL} title={video.Title} frameBorder="0" allowFullScreen></iframe>
                  </div>
                  <div className="mt-4 px-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">{video.Title}</h3>
                    <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{video.Category}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleVideos < videoDatabase.length && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={loadMore}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="group flex items-center gap-2.5 px-10 py-3.5 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all md:cursor-none shadow-xl"
                >
                  Load More <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* VFX Arsenal */}
      <motion.section id="services" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="py-24 border-t border-white/10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <MonitorPlay className="text-gray-400" /> Studio Services & Arsenal
          </h2>
          <p className="text-gray-400">The tools and workflow behind Scenoxis Creative.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800 transition-colors">
            <Scissors className="text-gray-300 mb-4" size={28} />
            <h4 className="font-bold text-white mb-2 text-lg">Non-Linear Editing</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Crafting narratives with precision pacing and seamless cuts.</p>
            <span className="bg-black px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10">Premiere Pro</span>
          </div>
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800 transition-colors">
            <Film className="text-gray-300 mb-4" size={28} />
            <h4 className="font-bold text-white mb-2 text-lg">Motion Graphics & VFX</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Compositing complex layers, rotoscoping, and 2D animation.</p>
            <span className="bg-black px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10">After Effects</span>
          </div>
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800 transition-colors">
            <Layers className="text-gray-300 mb-4" size={28} />
            <h4 className="font-bold text-white mb-2 text-lg">3D Modeling & CGI</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Building immersive 3D environments and physics simulations.</p>
            <span className="bg-black px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10">Blender</span>
          </div>
          <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl hover:bg-neutral-800 transition-colors">
            <Globe className="text-gray-300 mb-4" size={28} />
            <h4 className="font-bold text-white mb-2 text-lg">Global Delivery</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Managing international client briefs and delivering high-end assets.</p>
            <span className="bg-black px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10">Fiverr Agency</span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CreativePortfolio;