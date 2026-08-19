import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const imagesRow1 = [
    `${import.meta.env.BASE_URL}images/gallery/1.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/2.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/3.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/4.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/5.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/6.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/7.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/8.jpg`,
  ];

  const imagesRow2 = [
    `${import.meta.env.BASE_URL}images/gallery/9.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/10.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/11.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/12.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/13.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/14.jpg`,
    `${import.meta.env.BASE_URL}images/gallery/15.jpg`,
  ];

  return (
    <section className="py-24 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-marathi tracking-wide text-gradient">मैदानातला संघर्ष</h2>
        <p className="text-gray-400 text-lg">Moments of Glory from our athletes</p>
      </div>

      <div className="relative w-full flex flex-col gap-6">
        {/* Row 1 - Moves Left */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] opacity-80 hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            className="flex gap-6 shrink-0"
          >
            {[...imagesRow1, ...imagesRow1].map((src, i) => (
              <div key={i} className="w-[300px] md:w-[450px] h-[250px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden glass-panel border border-white/10">
                <img src={src} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-110" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] opacity-80 hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
            className="flex gap-6 shrink-0"
          >
            {[...imagesRow2, ...imagesRow2].map((src, i) => (
              <div key={i} className="w-[300px] md:w-[450px] h-[250px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden glass-panel border border-white/10">
                <img src={src} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-110" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
