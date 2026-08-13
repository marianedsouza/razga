import { motion, MotionValue } from "motion/react";
import { Triangle } from "../ui/Triangle";

interface HeroProps {
  heroY: MotionValue<number>;
}

export const Hero = ({ heroY }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-razga-bg">
      {/* Background Triangles - Desktop */}
      <div className="hidden md:block">
        <Triangle className="top-10 left-10 text-razga-accent" size={80} rotate={-20} delay={1} opacity={0.08} />
        <Triangle className="bottom-[10%] right-[-5%] text-razga-accent" size={300} rotate={45} delay={2} opacity={0.08} />
        <Triangle className="top-[20%] right-[10%] text-razga-accent" size={150} rotate={15} delay={1} opacity={0.08} />
      </div>
      
      {/* Background Triangles - Mobile */}
      {/* Removed from here to place them directly over the photo */}

      {/* Left Content - Text */}
      <motion.div 
        className="w-full lg:w-3/5 flex flex-col justify-center p-8 md:p-20 lg:p-32 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <img 
              src="/images/logo razga.png" 
              alt="RÁZGA Logo" 
              className="h-16 md:h-20 object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-2 mb-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-razga-ink opacity-60 block">por Mayara Barros</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-gray-900 mb-10 leading-[0.9] relative">
            <span className="serif italic font-light">Você não está perdida.</span><br />
            <span className="relative inline-block text-razga-accent serif italic">
              Você foi silenciada.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light mb-14 max-w-md leading-relaxed text-razga-ink/80 serif italic">
            Aqui você entende.<br />
            Aqui você nomeia.<br />
            Aqui você rompe.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-0">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/Bk9Bp70SLdv6soBQclyKyg" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-travessia bg-razga-accent text-white text-center rounded-full shadow-xl shadow-razga-accent/20"
            >
              Entrar na Comunidade
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#razga" 
              className="btn-travessia border border-razga-accent/30 text-razga-accent text-center rounded-full hover:bg-razga-accent/5"
            >
              Entender o RÁZGA
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right Content - Image with Parallax and Shapes */}
      <motion.div 
        style={{ y: heroY }}
        className="w-full lg:w-2/5 h-[60vh] lg:h-screen relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] shadow-2xl z-10"
        >
          <img
            src="/images/Hero.JPEG"
            alt="Mayara Barros - Olhar presente"
            className="w-full h-full object-cover object-[center_25%] brightness-95 contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-razga-accent/20 to-transparent"></div>
        </motion.div>

        {/* Floating Decorative Elements - Desktop */}
        <div className="hidden md:block">
          <Triangle className="bottom-20 left-[-50px] text-razga-accent z-20" size={100} rotate={-15} delay={0.5} opacity={0.08} />
          <Triangle className="top-1/4 right-10 text-razga-accent z-20" size={80} rotate={45} delay={1.5} opacity={0.08} />
        </div>

        {/* Floating Decorative Elements - Mobile (3 triangles over the photo) */}
        <div className="block md:hidden absolute inset-0 z-30 pointer-events-none">
          <Triangle className="top-[10%] right-[10%] text-razga-accent" size={70} rotate={45} delay={2} opacity={0.08} />
          <Triangle className="top-[45%] right-[5%] text-razga-accent" size={50} rotate={-20} delay={1.5} opacity={0.08} />
          <Triangle className="bottom-[15%] left-[10%] text-razga-accent" size={80} rotate={15} delay={1} opacity={0.08} />
        </div>
      </motion.div>
    </section>
  );
};
