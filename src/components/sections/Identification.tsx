import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const Identification = () => {
  const items = [
    "Você sente que ninguém te escuta de verdade.",
    "Você se cala pra não gerar conflito.",
    "Você sabe que tem força… mas não consegue acessar.",
    "Você vive cansada emocionalmente."
  ];

  return (
    <section id="identificacao" className="py-32 bg-white relative overflow-hidden">
      {/* Background Triangles - Desktop */}
      <div className="hidden md:block">
        <Triangle className="top-10 left-10 md:left-20 text-razga-accent" size={150} rotate={15} opacity={0.08} />
        <Triangle className="bottom-10 right-[-5%] text-razga-accent" size={300} rotate={-15} opacity={0.08} />
        <Triangle className="top-10 right-10 text-razga-accent" size={150} rotate={45} opacity={0.08} />
      </div>

      {/* Background Triangles - Mobile */}
      <div className="block md:hidden">
        <Triangle className="top-5 left-[-10%] text-razga-accent" size={80} rotate={15} opacity={0.08} />
        <Triangle className="bottom-5 right-[-15%] text-razga-accent" size={150} rotate={-15} opacity={0.08} />
        <Triangle className="top-5 right-[-5%] text-razga-accent" size={80} rotate={45} opacity={0.08} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-24 text-center"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="mb-12"
            >
              <img 
                src="/images/logo razga.png" 
                alt="RÁZGA" 
                className="h-24 md:h-32 object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl serif italic text-razga-ink/60 max-w-2xl">
              O silêncio que você carrega não é seu. É uma construção que agora vamos romper.
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-razga-gold rounded-[40px] rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                <div className="relative p-12 bg-razga-accent rounded-[40px] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8">
                    <Triangle className="text-razga-accent" size={30} rotate={0} opacity={1} />
                  </div>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-white serif italic">
                    "{item}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Conclusion */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <Triangle className="text-razga-accent" size={20} rotate={i * 120} delay={i * 0.2} opacity={0.08} />
                </div>
              ))}
            </div>
            <motion.p 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-2xl md:text-4xl serif italic text-razga-accent"
            >
              Aqui não tem julgamento.
            </motion.p>
            <h3 className="text-6xl md:text-9xl font-display font-black italic tracking-tighter opacity-20 uppercase text-gray-900 leading-none">
              Aqui tem verdade.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
