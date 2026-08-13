import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const HowItWorks = () => {
  const steps = [
    "Você entra.",
    "Você observa.",
    "Você começa a se reconhecer.",
    "Você rompe no seu tempo."
  ];

  return (
    <section id="como-funciona" className="py-32 bg-razga-bg relative overflow-hidden">
      <Triangle className="bottom-20 right-[-5%] text-razga-accent" size={300} rotate={45} delay={2} opacity={0.08} />
      <Triangle className="top-20 left-[-5%] text-razga-accent" size={250} rotate={-45} delay={1} opacity={0.08} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-6">
              <Triangle className="text-razga-accent" size={40} rotate={0} opacity={0.08} />
            </div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-razga-clay font-bold mb-4">A Travessia</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gray-900 serif italic">
              Como funciona o <span className="font-bold not-italic">RÁZGA</span>
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-12 md:gap-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
              >
                <div className="relative">
                  <span className="text-7xl md:text-9xl font-black opacity-10 serif italic text-razga-accent select-none">
                    0{index + 1}
                  </span>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Triangle className="text-razga-accent" size={80} rotate={15} opacity={0.08} />
                  </div>
                </div>
                <p className="text-3xl md:text-6xl font-bold tracking-tighter text-gray-900 cursor-default serif italic">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
