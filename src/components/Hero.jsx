import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal-900/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-transparent to-charcoal-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Cricket Stadium" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-6 px-6 py-2 rounded-full glass-panel border-victory-red/30 shadow-[0_0_20px_rgba(230,57,70,0.2)]"
        >
          <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-victory-red">
            Elite Sports Performance
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-marathi mb-4 tracking-tight leading-relaxed pt-4"
        >
          <span className="inline-block pb-2">भारत विद्यालय</span> <br/>
          <span className="text-gradient pt-4 pb-1 inline-block leading-normal">क्रिकेट अकादमी</span>
          <span className="block text-3xl md:text-5xl text-gray-400 font-medium mt-0">बुलढाणा</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl font-light text-gray-300 mb-8"
        >
          Cricket for Health & Happiness.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-3xl md:text-5xl font-marathi font-bold text-gradient-red mb-16 glow-hover inline-block leading-relaxed pt-4 pb-2"
        >
          अविरत! अभेद्य! अजिंक्य!
          <span className="block text-sm md:text-lg font-sans text-gray-400 mt-2 font-light uppercase tracking-[0.2em] relative top-2">
            Non-stop, Unbeatable, Invincible
          </span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 pb-10 flex flex-col items-center gap-2 w-full"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest leading-none">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 text-gray-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
