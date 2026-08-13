import { motion } from "motion/react";
import { Triangle } from "../ui/Triangle";

export const Community = () => {
  const benefits = [
    "Mulheres reais (sem máscara)",
    "Espaço de fala e escuta",
    "Direcionamento emocional diário",
    "Movimento de ruptura"
  ];

  return (
    <section id="comunidade" className="py-32 bg-razga-accent text-white relative overflow-hidden">
      {/* Background Triangles */}
      <Triangle className="top-[-10%] left-[-5%] text-razga-accent" size={500} rotate={15} opacity={0.08} />
      <Triangle className="bottom-[-10%] right-[-5%] text-razga-accent" size={400} rotate={-15} opacity={0.08} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-8">
              <Triangle className="text-razga-accent" size={60} rotate={0} opacity={0.08} />
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-none mb-8 serif italic">
              Você não precisa<br />
              atravessar sozinha.
            </h2>
            <p className="text-xl md:text-2xl opacity-70 font-light max-w-2xl mx-auto leading-relaxed serif italic">
              O RÁZGA é um manifesto vivo, mas também é um porto seguro. Uma comunidade de mulheres que decidiram não mais negociar suas vozes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-center gap-6 p-8 border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 rounded-2xl group"
              >
                <div className="w-3 h-3 bg-razga-yellow rounded-full group-hover:scale-150 transition-transform" />
                <p className="text-2xl font-light serif italic">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/Bk9Bp70SLdv6soBQclyKyg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-travessia bg-white text-razga-accent px-16 py-6 rounded-full text-lg shadow-2xl shadow-black/20"
            >
              Entrar na Comunidade
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5567996671390?text=Ol%C3%A1..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-travessia border border-white/30 text-white px-16 py-6 rounded-full text-lg hover:bg-white/10"
            >
              acolhimento agora
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
