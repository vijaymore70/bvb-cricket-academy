import React from 'react';
import { motion } from 'framer-motion';

const Facilities = () => {
  return (
    <section className="py-24 bg-[#08090C] relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Text Sticky Area */}
          <div className="lg:w-1/2 lg:sticky lg:top-40 self-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">World-Class <span className="text-gradient">Facilities</span></h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Step into an environment engineered for excellence. We provide our athletes with the highest quality turf, professional-grade bowling machines, and recovery resources.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Multiple Turf & Astro Pitches",
                  "Automated Bowling Machines",
                  "Video Analysis Room",
                  "Strength & Conditioning Gym"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-lg font-medium text-gray-300"
                  >
                    <div className="w-3 h-3 bg-victory-red rounded-full shadow-[0_0_10px_rgba(230,57,70,0.8)]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Image Grid Area */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="md:mt-16 bento-card aspect-[4/5]"
             >
               <img src="/images/Turf.jpg" alt="Turf Nets" className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-700 grayscale hover:grayscale-0" />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-charcoal-900 to-transparent">
                 <h4 className="text-xl font-bold">Turf Nets</h4>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="bento-card aspect-[4/5] md:-mt-16"
             >
               <img src="/images/Ground.jpg" alt="Match Pitch" className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-700 grayscale hover:grayscale-0" />
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-charcoal-900 to-transparent">
                 <h4 className="text-xl font-bold">Match Grounds</h4>
               </div>
             </motion.div>
             
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
