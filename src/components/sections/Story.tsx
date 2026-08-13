import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const Story = () => {
  return (
    <section id="historia" className="py-32 bg-razga-bg relative overflow-hidden">
      <Triangle className="top-10 left-10 text-razga-accent" size={150} rotate={-20} delay={1} opacity={0.08} />
      <Triangle className="bottom-10 right-10 text-razga-accent" size={200} rotate={45} delay={3} opacity={0.08} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-6">
              <Triangle className="text-razga-accent" size={40} rotate={0} opacity={0.08} />
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-gray-900 serif italic">
              Eu não nasci forte.<br />
              <span className="font-bold not-italic">Eu me tornei.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32">
            {/* Antes */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 relative"
            >
              <div className="absolute -left-10 top-0 w-1 h-full bg-razga-clay/10" />
              <h3 className="text-xs uppercase tracking-[0.4em] text-razga-clay font-bold mb-4">A Sobrevivência</h3>
              <div className="space-y-8">
                {["Eu me calei.", "Eu me perdi.", "Eu sobrevivi."].map((text, i) => (
                  <motion.p 
                    key={i}
                    whileHover={{ x: 10, opacity: 0.8 }}
                    className="text-3xl md:text-4xl font-light opacity-40 line-through cursor-default serif italic"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Imagens Sobrevivência */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05, rotate: num % 2 === 0 ? 2 : -2 }}
                    className="aspect-square overflow-hidden rounded-2xl shadow-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  >
                    <img 
                      src={`/images/A Sobrevivência (${num}).jpeg`} 
                      alt={`Sobrevivência ${num}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Depois */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 relative"
            >
              <div className="absolute -left-10 top-0 w-1 h-full bg-razga-accent/20" />
              <h3 className="text-xs uppercase tracking-[0.4em] text-razga-accent font-bold mb-4">A Travessia</h3>
              <div className="space-y-8">
                {["Hoje eu não negocio mais minha voz.", "Hoje eu não volto atrás."].map((text, i) => (
                  <motion.p 
                    key={i}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 cursor-default origin-left serif italic"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Imagens Travessia */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05, rotate: num % 2 === 0 ? -2 : 2 }}
                    className="aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-razga-accent/20 transition-all duration-500"
                  >
                    <img 
                      src={`/images/A Travessia (${num}).jpeg`} 
                      alt={`Travessia ${num}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="pt-12">
                <Triangle className="text-razga-accent" size={60} rotate={15} opacity={0.08} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
