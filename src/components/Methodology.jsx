import React from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, Flame } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-golden-grass" />,
      title: "Foundation & Technique",
      desc: "Building rock-solid basics. We focus on stance, grip, and the mechanics of the game ensuring every player unlearns bad habits and builds perfect muscle memory."
    },
    {
      icon: <Activity className="w-8 h-8 text-victory-red" />,
      title: "Tactical & Physical Conditioning",
      desc: "Cricket is 50% mental and 50% physical. Our rigorous fitness routines paired with tactical match-simulations prepare athletes for the pressures of state-level games."
    },
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Match Temperament & Execution",
      desc: "We put our squads in high-stakes scenarios. Learning to thrive under pressure, adapt to pitch conditions, and out-think the opposition is what creates national-level players."
    }
  ];

  return (
    <section className="py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-victory-dark/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-golden-light uppercase mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gradient">Methodology</span></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">We don't just teach cricket; we engineer athletes who are mentally and physically unbroken.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative cursor-default">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Visual / Blank Space for Desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-charcoal-800 border-4 border-charcoal-900 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <div className="w-4 h-4 bg-golden-light rounded-full" />
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="md:w-1/2 pl-20 md:pl-0"
                >
                  <div className={`glass-panel p-8 rounded-3xl relative group hover:border-white/10 transition-colors ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-golden-light transition-colors">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
