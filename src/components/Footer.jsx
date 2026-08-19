import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <footer className="bg-[#0A0C10] py-16 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="max-w-2xl mx-auto mb-10 flex flex-col items-center">
          {/* Static Bat Logo from Navbar */}
          <div className="relative flex items-center justify-center mb-8" style={{ width: '280px', height: '55px' }}>
            <svg width="220" height="50" viewBox="0 0 160 40" className="absolute left-[30px] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
               {/* Grip */}
               <rect x="5" y="16" width="35" height="8" fill="#4a4a4a" />
               <rect x="3" y="14" width="6" height="12" fill="#2a2a2a" rx="2" />
               <path d="M 12 16 L 15 24 M 20 16 L 23 24 M 28 16 L 31 24" stroke="#111" strokeWidth="2" />
               {/* Blade */}
               <path d="M 40 16 Q 48 16 50 6 L 150 6 Q 158 6 158 20 Q 158 34 150 34 L 50 34 Q 48 24 40 24 Z" fill="#1f2937" />
               <path d="M 40 16 Q 45 20 40 24" fill="none" stroke="#222" />
               <line x1="50" y1="20" x2="148" y2="20" stroke="#374151" strokeWidth="1" />
            </svg>
            <div className="absolute left-[120px] text-white font-black text-2xl tracking-widest z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
              BVCA
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-2 font-marathi">Bharat Vidyalaya Cricket Academy</h2>
          <p className="text-gray-500">Buldhana's Premier Cricket Institution</p>
        </div>
        
        {/* Map and Address Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto mb-16 text-left">
          {/* Map Card */}
          <div className="glass-panel p-2 rounded-3xl overflow-hidden h-[300px] md:h-[350px] relative group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <iframe 
              src="https://maps.google.com/maps?q=Bharat+Vidyalaya+Buldhana&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
              className="rounded-[1.3rem] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
            ></iframe>
            {/* Clickable Overlay to open Maps directly */}
            <a href="https://maps.google.com/?q=Bharat+Vidyalaya+Buldhana" target="_blank" rel="noreferrer" className="absolute inset-0 z-10 cursor-pointer" aria-label="Open in Google Maps"></a>
          </div>
          
          {/* Address Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#161922] to-[#0D0F14] py-8 md:py-10 px-10 md:px-14 rounded-[2rem] flex flex-col justify-center items-start border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group hover:border-victory-red/30 transition-all duration-700">
             
             {/* Subtle ambient glow in the corner */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-victory-red/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-victory-red/20 transition-all duration-700"></div>

             <div className="flex items-center gap-4 mb-10 relative z-10 w-full">
               <div className="w-14 h-14 bg-gradient-to-br from-victory-red/30 to-victory-red/5 rounded-full flex items-center justify-center border border-victory-red/40 shadow-[0_0_20px_rgba(230,57,70,0.3)]">
                 <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                 </svg>
               </div>
               <span className="text-3xl md:text-4xl font-black text-victory-red uppercase tracking-[0.2em] font-marathi drop-shadow-[0_0_15px_rgba(230,57,70,0.4)]">Address</span>
             </div>
             
             <h3 className="text-xl md:text-[1.75rem] leading-tight font-black mb-10 font-marathi drop-shadow-2xl relative z-10 w-full whitespace-nowrap">
               <span className="text-golden-grass">Bharat Vidyalaya & Junior College</span>
             </h3>
             
             <div className="relative z-10 border-l-[3px] border-victory-red/50 pl-6 ml-2 space-y-3">
               <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
                 Chaitanyawadi, Chikhli Road
               </p>
               <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide">
                 Buldhana, Maharashtra <span className="ml-2 opacity-80">443001</span>
               </p>
             </div>
          </div>
        </div>
        
        <div className="py-10 border-t border-b border-white/5 mb-10">
          <p className="text-2xl md:text-3xl font-serif italic text-gray-300">
            "Learning from mistakes is true knowledge."
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 gap-6 lg:gap-0 w-full">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} Bharat Vidyalaya Cricket Academy. All rights reserved.</p>
          </div>
          
          <div className="lg:w-1/3 flex justify-center text-center">
            <p>
              Designed by <a href="https://share.google/WGnIb6p7FY98U0W2Q" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium group relative inline-flex items-center ml-1">
                Refresh Technology, Buldhana.
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
          </div>
          
          <div className="lg:w-1/3 flex justify-center lg:justify-end gap-6">
            <button onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }} className="hover:text-white transition-colors text-left text-gray-400">Privacy Policy</button>
            <button onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }} className="hover:text-white transition-colors text-left text-gray-400">Terms of Service</button>
          </div>
          
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#161922] border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-[105]"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
              
              {activeModal === 'privacy' && (
                <div className="text-left font-sans">
                  <h3 className="text-3xl font-black text-white mb-6 font-marathi">Privacy Policy</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>At Bharat Vidyalaya Cricket Academy (BVCA), we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">1. Information Collection</h4>
                    <p>We may collect personal information such as your name, email address, phone number, and age when you register, contact us, or participate in our programs.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">2. Use of Information</h4>
                    <p>The information collected is used to manage registrations, communicate program updates, handle emergencies, and improve our academy's offerings.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">3. Data Security</h4>
                    <p>We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">4. Contact Us</h4>
                    <p>If you have any questions about this Privacy Policy, please contact us at the address provided in our contact section.</p>
                    <p className="mt-8 text-sm italic opacity-60">Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              )}
              
              {activeModal === 'terms' && (
                <div className="text-left font-sans">
                  <h3 className="text-3xl font-black text-white mb-6 font-marathi">Terms of Service</h3>
                  <div className="space-y-4 text-gray-400 leading-relaxed">
                    <p>By using the services of Bharat Vidyalaya Cricket Academy (BVCA) or participating in our programs, you agree to be bound by the following terms.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">1. Code of Conduct</h4>
                    <p>All players, parents, and visitors must adhere to our academy's code of conduct, prioritizing sportsmanship, respect, and fair play at all times.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">2. Health and Safety</h4>
                    <p>Participants are expected to inform the academy of any pre-existing medical conditions. While we ensure maximum safety, participation involves physical activity and inherent risks.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">3. Attendance and Punctuality</h4>
                    <p>Regular attendance and punctuality are crucial for development. Members are required to arrive on time for scheduled sessions and matches.</p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-2">4. Photography & Media</h4>
                    <p>By joining, you consent to the academy using practice or match photos/videos for promotional purposes unless expressly prohibited in writing.</p>
                    <p className="mt-8 text-sm italic opacity-60">Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
