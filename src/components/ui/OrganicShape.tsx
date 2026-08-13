import { motion } from "motion/react";

interface ShapeProps {
  className?: string;
  size?: number;
  delay?: number;
  type?: "circle" | "blob" | "spiral";
}

export const OrganicShape = ({ className = "", size = 100, delay = 0, type = "circle" }: ShapeProps) => {
  const getPath = () => {
    switch (type) {
      case "blob":
        return "M30,10 C45,5 60,15 70,30 C80,45 75,65 60,75 C45,85 25,80 15,65 C5,50 15,15 30,10 Z";
      case "spiral":
        return "M50,50 Q60,40 70,50 T90,50 M50,50 Q40,60 30,50 T10,50";
      default:
        return "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full opacity-10">
        {type === "spiral" ? (
          <path d="M50,50 C50,20 80,20 80,50 C80,80 20,80 20,50 C20,20 70,20 70,50 C70,70 30,70 30,50 C30,40 60,40 60,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        ) : (
          <path d={getPath()} />
        )}
      </svg>
    </motion.div>
  );
};
