import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const WhatIsRazga = () => {
  const points = [
    "Escutar o que foi ignorado.",
    "Nomear o que nunca teve voz.",
    "Romper padrões que te aprisionam."
  ];

  return (
    <section id="razga" className="py-32 bg-razga-accent text-white overflow-hidden relative">
      {/* Background Triangles */}
      <Triangle className="top-[-10%] right-[-5%] text-razga-accent" size={400} rotate={15} opacity={0.08} />
      <Triangle className="bottom-[-10%] left-[-5%] text-razga-accent" size={300} rotate={-15} opacity={0.08} />

      {/* Marquee Movement */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-4 border-b border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 text-[10px] uppercase tracking-[1em] opacity-30"
        >
          <span>Ruptura • Nomear • Romper • RÁZGA • Travessia • Consciência • Verdade • Ruptura • Nomear • Romper • RÁZGA • Travessia • Consciência • Verdade</span>
          <span>Ruptura • Nomear • Romper • RÁZGA • Travessia • Consciência • Verdade • Ruptura • Nomear • Romper • RÁZGA • Travessia • Consciência • Verdade</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 pt-24 md:pt-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <Triangle className="text-razga-accent" size={30} rotate={0} opacity={0.08} />
              <h3 className="text-xl uppercase tracking-[0.4em] opacity-70">O que é o RÁZGA</h3>
            </div>
            <p className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-4 serif italic">RÁZGA não é sobre motivação.</p>
            <p className="text-6xl md:text-9xl font-display font-black italic tracking-tighter opacity-20">É sobre ruptura.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 relative group pl-12"
              >
                <div className="absolute -left-4 -top-4 text-8xl font-black opacity-10 serif italic group-hover:opacity-30 transition-opacity select-none pointer-events-none">
                  0{index + 1}
                </div>
                <p className="text-2xl md:text-3xl font-light leading-snug serif italic">
                  {point}
                </p>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  className="h-[1px] bg-razga-gold/40"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative vertical text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <span className="writing-vertical text-[10px] uppercase tracking-[1em] opacity-30">
          Ruptura • Nomear • Romper • RÁZGA
        </span>
      </div>
    </section>
  );
};
