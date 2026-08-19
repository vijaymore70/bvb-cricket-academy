import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

// Custom SVG social icons since lucide-react doesn't export Facebook/Instagram
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const CricketBall = ({ size = 20, rotate = false }) => (
  <div className={`w-[${size}px] h-[${size}px] shrink-0 relative rounded-full drop-shadow-[0_0_12px_rgba(220,38,38,0.9)]`} style={{ width: size, height: size }}>
     <svg width={size} height={size} viewBox="0 0 24 24" className={`w-full h-full ${rotate ? 'animate-spin' : ''}`}>
       <defs>
          <radialGradient id="cricketBallGrad" cx="30%" cy="30%" r="70%">
             <stop offset="0%" stopColor="#ff7676"/>
             <stop offset="40%" stopColor="#dc2626"/> 
             <stop offset="100%" stopColor="#7f1d1d"/> 
          </radialGradient>
       </defs>
       <circle cx="12" cy="12" r="11" fill="url(#cricketBallGrad)" />
       <path d="M 12 1 Q 18 12 12 23" fill="none" stroke="#450a0a" strokeWidth="2.5" />
       <path d="M 12 1 Q 18 12 12 23" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
       <path d="M 10 1.5 Q 16 12 10 22.5" fill="none" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="1 2" opacity="0.7"/>
       <path d="M 14 1.5 Q 20 12 14 22.5" fill="none" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="1 2" opacity="0.7"/>
     </svg>
  </div>
);

const AnimatedLogo = ({ onShoot }) => {
  return (
    <div 
      className="relative flex items-center cursor-pointer group" 
      onClick={onShoot}
      style={{ width: '280px', height: '55px' }}
    >
      <div className="absolute -inset-x-4 -inset-y-2 bg-white/0 rounded-lg group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
      
      {/* Bat SVG */}
      <svg width="220" height="50" viewBox="0 0 160 40" className="absolute left-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] transition-transform duration-300 group-hover:rotate-2">
         {/* Grip */}
         <rect x="5" y="16" width="35" height="8" fill="#4a4a4a" />
         <rect x="3" y="14" width="6" height="12" fill="#2a2a2a" rx="2" />
         <path d="M 12 16 L 15 24 M 20 16 L 23 24 M 28 16 L 31 24" stroke="#111" strokeWidth="2" />
         
         {/* Blade */}
         <path d="M 40 16 Q 48 16 50 6 L 150 6 Q 158 6 158 20 Q 158 34 150 34 L 50 34 Q 48 24 40 24 Z" fill="#1f2937" />
         {/* Bat accent / splice line */}
         <path d="M 40 16 Q 45 20 40 24" fill="none" stroke="#222" />
         <line x1="50" y1="20" x2="148" y2="20" stroke="#374151" strokeWidth="1" />
      </svg>
      
      {/* Static BVCA Outline / Shadow */}
      <div className="absolute left-[90px] text-white font-black text-2xl tracking-widest z-10 pointer-events-none select-none drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
        BVCA
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [flyKey, setFlyKey] = useState(0);
  const [buttonTargetGlow, setButtonTargetGlow] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShoot = () => {
    setFlyKey(prev => prev + 1);
    setButtonTargetGlow(false);
  };

  const openModal = () => setShowContactModal(true);
  const closeModal = () => setShowContactModal(false);

  return (
    <>
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            {/* Modal Backdrop / Overlay layer */}
            <div className="absolute inset-0 bg-charcoal-900/90 backdrop-blur-xl" onClick={closeModal} />
            
            {/* Pitch Background container */}
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-center items-center text-center p-8"
            >
              {/* === CRICKET PITCH BACKGROUND === */}
              {/* Green Grass base */}
              <div className="absolute inset-0" style={{ backgroundColor: '#2d6a2d' }}>
                {/* Mowing stripe effect — vertical stripes for landscape pitch */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 40px, transparent 40px, transparent 80px)',
                }}/>
                {/* Subtle grid overlay */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 30px)',
                  backgroundSize: '100% 30px'
                }} />

                {/* === CENTRE PITCH STRIP (clay/dirt) — HORIZONTAL === */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[20%] right-[20%] h-[22%] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#c8a26b' }}>
                  {/* Cracked clay texture */}
                  <div className="absolute inset-0 opacity-75" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='120'%3E%3Cpath d='M0 20 L60 30 L120 10 L200 40 L280 15 L360 35 L440 20 L520 30 L600 18' stroke='%23a07840' strokeWidth='1.5' fill='none' opacity='0.7'/%3E%3Cpath d='M0 60 L80 50 L160 70 L240 55 L320 65 L400 50 L480 72 L600 60' stroke='%23a07840' strokeWidth='1' fill='none' opacity='0.6'/%3E%3Cpath d='M0 95 L70 85 L150 100 L230 88 L310 105 L390 90 L470 102 L600 95' stroke='%23a07840' strokeWidth='1.5' fill='none' opacity='0.7'/%3E%3Cpath d='M80 30 L90 60 L70 50' stroke='%23a07840' strokeWidth='1' fill='none' opacity='0.5'/%3E%3Cpath d='M200 50 L210 80 L190 70' stroke='%23a07840' strokeWidth='1' fill='none' opacity='0.5'/%3E%3Cpath d='M350 25 L360 55 L340 45' stroke='%23a07840' strokeWidth='1' fill='none' opacity='0.5'/%3E%3Cpath d='M480 60 L495 90 L470 80' stroke='%23a07840' strokeWidth='1' fill='none' opacity='0.5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: 'auto 100%'
                  }} />
                  {/* Top and bottom edge lines */}
                  <div className="absolute w-full h-[2px] bg-white/40 top-0" />
                  <div className="absolute w-full h-[2px] bg-white/40 bottom-0" />
                  {/* Crease lines — vertical, contained inside strip */}
                  <div className="absolute h-full w-[2px] bg-white/90 left-[20%]" />
                  <div className="absolute h-full w-[2px] bg-white/90 left-[80%]" />
                  {/* Stump dots */}
                  <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                </div>

                {/* Boundary oval */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90%] rounded-full border-2 border-white/15 pointer-events-none" />
                {/* Inner 30-yard circle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[70%] rounded-full border border-white/10 pointer-events-none" />
              </div>

              {/* Dark overlay so content is readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />

              
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="relative z-10 w-full -mt-14 md:-mt-24">
                <span className="text-golden-grass font-bold tracking-[0.3em] uppercase text-sm mb-4 block drop-shadow-md">Join The Legacy</span>
                <h2 className="text-4xl md:text-6xl font-black mb-10 font-marathi drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Bharat Vidyalaya <br/><span className="text-gradient">Cricket Academy</span></h2>
                
                {/* Contact Number */}
                 <div className="bg-charcoal-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 inline-block mb-10 hover:border-victory-red/50 transition-colors shadow-[0_0_30px_rgba(230,57,70,0.2)]">
                   <div className="flex items-center gap-3 text-2xl md:text-4xl font-black text-white">
                     <Phone className="w-8 h-8 md:w-10 md:h-10 text-victory-red animate-pulse" />
                     +91 94221 80371
                   </div>
                 </div>

                {/* Social Links */}
                <div className="flex justify-center flex-wrap gap-6 mt-4">
                  <a href="https://www.facebook.com/bvbcricket.buldana" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#1877F2]/20 hover:bg-[#1877F2]/40 border border-[#1877F2]/50 px-6 py-3 rounded-full transition-colors group">
                    <FacebookIcon className="w-6 h-6 text-[#1877F2] group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/sanjaydeval4466/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#E1306C]/20 hover:bg-[#E1306C]/40 border border-[#E1306C]/50 px-6 py-3 rounded-full transition-colors group">
                    <InstagramIcon className="w-6 h-6 text-[#E1306C] group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white">Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative overflow-visible">
        
        <AnimatedLogo onShoot={handleShoot} />

        {/* Flying Ball Layer */}
        {flyKey > 0 && (
          <motion.div
            key={`flight-${flyKey}`}
            initial={{ left: '200px', top: '50%', y: '-50%', scale: 1, opacity: 1 }}
            animate={{ left: 'calc(100% - 100px)', top: '50%', y: '-50%', scale: [1, 1.2, 0.5], opacity: [1, 1, 1, 0] }}
            transition={{ duration: 0.8, ease: "easeInOut", times: [0, 0.5, 0.9, 1] }}
            onAnimationComplete={() => {
              setButtonTargetGlow(true);
              setTimeout(() => openModal(), 600); // Opens modal slightly after hitting!
            }}
            className="absolute z-40 flex items-center gap-1 pointer-events-none drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
          >
             {/* Motion lines trailing left of ball now because moving R */}
             <div className="flex flex-col gap-[3px] mr-1 shrink-0 absolute right-[20px] top-1/2 -translate-y-1/2 opacity-70">
                <div className="w-20 h-[2px] bg-gradient-to-l from-red-400/80 to-transparent rounded-full" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-white/50 to-transparent rounded-full ml-4" />
                <div className="w-24 h-[2px] bg-gradient-to-l from-victory-red/90 to-transparent rounded-full" />
             </div>
             
             {/* Only the ball itself rotates! */}
             <motion.div
               initial={{ rotate: 0 }}
               animate={{ rotate: 1440 }}
               transition={{ duration: 0.8, ease: "linear" }}
             >
               <CricketBall size={25} />
             </motion.div>
          </motion.div>
        )}

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-golden-light transition-colors">Home</a>
          <a href="#legacy" className="hover:text-golden-light transition-colors">Legacy</a>
          <a href="#squads" className="hover:text-golden-light transition-colors">Squads</a>
          <a href="#leadership" className="hover:text-golden-light transition-colors">Mentors</a>
        </div>
        
        <button 
           onClick={openModal}
           className={`relative backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 ${buttonTargetGlow ? 'border border-victory-red shadow-[0_0_20px_rgba(220,38,38,0.8)] scale-110 bg-victory-red/30' : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'}`}
        >
          {/* Button impact ripple! */}
          {buttonTargetGlow && (
             <motion.div 
               key={`ripple-${flyKey}`}
               initial={{ opacity: 1, scale: 0.5 }}
               animate={{ opacity: 0, scale: 2 }}
               transition={{ duration: 0.5 }}
               className="absolute inset-0 bg-victory-red mix-blend-overlay rounded-full pointer-events-none"
             />
          )}

          <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
            Join Academy
            {/* The ball 'embeds' next to text when glow is true! */}
            {buttonTargetGlow && (
               <motion.div 
                 key={`embed-${flyKey}`} 
                 initial={{ scale: 0 }} 
                 animate={{ scale: 1 }} 
                 transition={{ duration: 0.3 }} 
                 className="origin-left"
               >
                 <CricketBall size={14} />
               </motion.div>
            )}
          </span>
        </button>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
