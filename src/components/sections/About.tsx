import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const About = () => {
  return (
    <section id="sobre" className="py-32 bg-razga-bg relative overflow-hidden">
      <Triangle className="top-20 right-[-5%] text-razga-accent" size={300} rotate={15} delay={1} opacity={0.08} />
      <Triangle className="bottom-20 left-[-5%] text-razga-accent" size={250} rotate={-15} delay={2} opacity={0.08} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex justify-center mb-8">
              <Triangle className="text-razga-accent" size={60} rotate={0} opacity={0.08} />
            </div>
            
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-gray-900 leading-none serif italic">
              Meu nome é <span className="font-bold not-italic">Mayara.</span>
            </h2>
            
            <div className="space-y-8 text-2xl md:text-4xl font-light leading-relaxed text-gray-700 serif italic">
              <p>
                Eu não estou aqui porque estudei isso.<br />
                <span className="font-bold text-razga-accent not-italic">Eu estou aqui porque vivi.</span>
              </p>
              
              <p className="text-xl md:text-2xl opacity-60">
                Eu não vim te ensinar.<br />
                Eu vim caminhar com você enquanto você rompe.
              </p>
            </div>

            <div className="pt-12">
              <Triangle className="text-razga-accent" size={40} rotate={15} opacity={0.08} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
