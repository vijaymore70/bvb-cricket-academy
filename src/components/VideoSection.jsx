import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-24 bg-[#08090C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-red-900/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-900/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-golden-light uppercase mb-4 block">Inside the Academy</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Watch Us in <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(230,57,70,0.8)] transition-all">Action</span></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Witness the dedication, the rigorous drills, and the burning passion that forge tomorrow's champions at Bharat Vidyalaya Cricket Academy.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-panel p-2 md:p-3 rounded-[2rem] max-w-5xl mx-auto relative shadow-[0_0_50px_rgba(230,57,70,0.08)] group"
        >
           <div className="aspect-video w-full rounded-[1.5rem] overflow-hidden bg-black/80 border border-white/10 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/OiSwvs_-9WM?autoplay=0&rel=0&showinfo=0&modestbranding=1" 
                title="Bharat Vidyalaya Cricket Academy" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              ></iframe>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
export default VideoSection;
