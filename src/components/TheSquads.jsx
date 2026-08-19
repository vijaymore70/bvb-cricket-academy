import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const TheSquads = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="squads" className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-victory-dark/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The <span className="text-gradient">Squads</span></h2>
          <p className="text-gray-400 text-lg">Our elite teams dominating the field.</p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]"
        >
          {/* U-19 Girls */}
          <motion.div variants={itemVars} className="bento-card md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2 p-8 md:p-12 flex flex-col justify-end group relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-30 transition-all duration-700 grayscale-[0.8] group-hover:grayscale-0" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/U19G.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40" />
            <div className="relative z-10">
              <div className="bg-victory-red/20 border border-victory-red/30 w-fit p-3 rounded-2xl mb-6 shadow-[0_0_15px_rgba(230,57,70,0.3)]">
                <Trophy className="w-8 h-8 text-victory-red" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-golden-light transition-colors duration-300">U-19 Girls</h3>
              <div className="h-1 w-20 bg-victory-red mb-6 rounded-full" />
              <p className="text-2xl font-semibold mb-2">Leather Ball Cricket</p>
              <p className="text-gray-300 text-lg">History-making state-level debut. Setting new standards for women's cricket.</p>
            </div>
          </motion.div>

          {/* U-17 Boys */}
          <motion.div variants={itemVars} className="bento-card p-8 group flex flex-col justify-between relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-30 transition-all duration-700 grayscale-[0.8] group-hover:grayscale-0" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/U17B.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40" />
            <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-3xl font-bold">U-17<br/>Boys</h3>
              <Star className="w-8 h-8 text-golden-grass opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all" />
            </div>
            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Achievement</p>
              <p className="text-xl font-medium text-golden-light">Ranked 3rd at State Level</p>
            </div>
          </motion.div>

          {/* U-14 Boys */}
          <motion.div variants={itemVars} className="bento-card p-8 group flex flex-col justify-between lg:col-span-1 relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-30 transition-all duration-700 grayscale-[0.8] group-hover:grayscale-0" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/U14B.jpg')` }} />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40" />
             <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-3xl font-bold">U-14<br/>Boys</h3>
              <Medal className="w-8 h-8 text-gray-300 opacity-50 group-hover:opacity-100 group-hover:animate-bounce transition-all" />
            </div>
            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Achievement</p>
              <p className="text-xl font-medium text-white">Ranked 4th at State Level</p>
            </div>
          </motion.div>

          {/* U-14 Girls */}
          <motion.div variants={itemVars} className="bento-card p-8 lg:col-span-2 md:col-span-2 group flex flex-col justify-between relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-30 transition-all duration-700 grayscale-[0.8] group-hover:grayscale-0" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/U14G.jpg')` }} />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40" />
             <div className="relative z-10 flex justify-between items-start">
              <h3 className="text-3xl font-bold text-white">U-14 Girls</h3>
              <Trophy className="w-8 h-8 text-victory-red opacity-50 group-hover:opacity-100 transition-all drop-shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
            </div>
            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Tennis Cricket</p>
              <p className="text-xl font-medium text-victory-red drop-shadow-md">District Runners-up</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheSquads;
