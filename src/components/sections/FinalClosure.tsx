import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const FinalClosure = () => {
  return (
    <section id="fechamento" className="py-40 bg-razga-accent text-white relative overflow-hidden">
      {/* Background Triangles */}
      <Triangle className="top-[-10%] right-[-10%] text-razga-accent" size={500} rotate={15} opacity={0.08} />
      <Triangle className="bottom-[-10%] left-[-10%] text-razga-accent" size={400} rotate={-15} opacity={0.08} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex justify-center mb-8">
              <Triangle className="text-razga-accent" size={80} rotate={0} opacity={0.08} />
            </div>
            
            <div className="space-y-8">
              <p className="text-3xl md:text-5xl font-light opacity-60 serif italic">Ou você continua se calando…</p>
              <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none serif italic">
                Ou você começa <span className="font-bold not-italic">hoje.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/Bk9Bp70SLdv6soBQclyKyg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-travessia bg-white text-razga-accent px-16 py-8 rounded-full text-center font-bold text-xl shadow-2xl shadow-black/20"
              >
                Entrar na Comunidade
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5567996671390?text=Ol%C3%A1..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-travessia border border-white/30 text-white px-16 py-8 rounded-full text-center text-xl hover:bg-white/10"
              >
                acolhimento agora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background large text with movement */}
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
      >
        <span className="text-[30vw] font-display font-black uppercase tracking-tighter serif italic">RÁZGA</span>
      </motion.div>
    </section>
  );
};
