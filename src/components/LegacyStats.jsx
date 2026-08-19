import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const LegacyStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section id="legacy" className="relative py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      {/* Background Parallax Element */}
      <motion.div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center z-0 overflow-hidden"
        initial={{ y: 50 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 5, ease: "linear" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h2 className="text-[22vw] md:text-[13vw] font-black whitespace-nowrap text-white tracking-tighter leading-none select-none">
          27 YEARS
        </h2>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">27 Years of <span className="text-gradient">Excellence</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A legacy built on sweat, discipline, and an unbeatable spirit.</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'State Players', value: 624, affix: '+' },
            { label: 'National Players', value: 50, affix: '+' },
            { label: 'State Teams', value: 39, affix: '' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-10 text-center relative hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-victory-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {stat.value}
                <span className="text-victory-red">{stat.affix}</span>
              </h3>
              <p className="text-xl text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyStats;
