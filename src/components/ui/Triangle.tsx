import { motion } from "motion/react";

export const Triangle = ({ className, size = 20, rotate = 0, delay = 0, opacity = 0.1 }: { className?: string, size?: number, rotate?: number, delay?: number, opacity?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate }}
    whileInView={{ opacity }}
    animate={{ 
      y: [0, -10, 0],
      rotate: [rotate, rotate + 3, rotate]
    }}
    transition={{ 
      y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 2 }
    }}
    className={`absolute pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      {/* Simple Triangle */}
      <path d="M 50,0 L 100,100 L 0,100 Z" />
    </svg>
  </motion.div>
);
