import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const coaches = [
    { name: "Savarmal Sharma", role: "Assistant Coach" },
    { name: "Rohan Shete", role: "Fitness & Agility" },
    { name: "Sandesh Patil", role: "Bowling Consultant" },
    { name: "Arun Saubhage", role: "Fielding Coach" }
  ];

  return (
    <section id="leadership" className="py-24 bg-charcoal-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-victory-red/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership & <span className="text-gradient">Mentors</span></h2>
          <p className="text-gray-400 text-lg">Guiding the next generation of champions.</p>
        </motion.div>

        {/* Head Coach - Prominent Top Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group glass-panel rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 overflow-hidden relative cursor-pointer text-center sm:text-left shadow-[0_0_30px_rgba(0,0,0,0.4)]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-golden-grass/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-golden-grass/30 shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.15)] group-hover:border-golden-grass/50 transition-colors duration-500">
               <img src="/images/44.png" alt="Sanjay Heramb Deval" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             </div>
             <div className="flex flex-col justify-center h-full sm:mt-2">
               <p className="text-lg md:text-xl text-golden-grass mb-1 font-medium tracking-wide uppercase">Head Cricket Coach</p>
               <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-golden-light transition-colors">Sanjay Heramb Deval</h3>
               <p className="text-gray-400 text-lg md:pr-10">Bringing decades of professional experience and a passion for developing young talent to BVCA.</p>
             </div>
          </motion.div>
        </div>

        {/* Principal and Chairman Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Principal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group glass-panel rounded-3xl p-6 md:p-8 flex items-center gap-6 overflow-hidden relative cursor-pointer"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 shrink-0 group-hover:border-victory-red/40 transition-colors duration-500">
               <img src="/images/11.png" alt="Pralhad Gaikwad" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-white transition-colors">Pralhad Gaikwad</h3>
               <p className="text-gray-400 group-hover:text-victory-red transition-all duration-300">Principal</p>
             </div>
          </motion.div>

          {/* Chairman */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group glass-panel rounded-3xl p-6 md:p-8 flex items-center gap-6 overflow-hidden relative cursor-pointer"
          >
             <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 shrink-0 group-hover:border-victory-red/40 transition-colors duration-500">
               <img src="/images/Chairman.jpg" alt="Dr. Seema Agashe" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-white transition-colors">Dr. Seema Agashe</h3>
               <p className="text-gray-400 group-hover:text-victory-red transition-all duration-300">Chairman</p>
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6 text-center group hover:bg-white/5 transition-colors cursor-pointer"
            >
              <h4 className="text-lg font-bold mb-2">{coach.name}</h4>
              <p className="text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] group-hover:-translate-y-1 block">
                {coach.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
