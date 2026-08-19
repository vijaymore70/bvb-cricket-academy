import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Achievers = () => {
  return (
    <section className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-golden-grass/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-marathi">सृजन २०२६</h2>
          <p className="text-gray-400 text-lg">Academic Excellence & Scholarships</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bento-card p-10 md:p-14 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden-grass/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-victory-red/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="mx-auto bg-white/5 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-inner border border-white/10">
                <GraduationCap className="w-10 h-10 text-golden-light" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Jawahar Navodaya Vidyalaya</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <span className="block text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">56</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-victory-red mt-2 block">Students</span>
                </div>
                <div className="h-16 w-px bg-white/10 hidden md:block" />
                <div className="text-center">
                  <span className="block text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">5th</span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-golden-grass mt-2 block">Class Focus</span>
                </div>
              </div>
              <p className="text-xl text-gray-300">
                Successfully appeared for the highly competitive <span className="text-white font-semibold">2025 examinations</span>, setting a new benchmark for academic and athletic balance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievers;
