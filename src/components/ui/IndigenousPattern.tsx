import { motion } from "motion/react";

interface PatternProps {
  className?: string;
  opacity?: number;
}

export const IndigenousPattern = ({ className = "", opacity = 0.1 }: PatternProps) => {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="indigenous-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Organic indigenous-inspired pattern (Sacred Feminine style) */}
            <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
            <path
              d="M30,30 C30,15 45,15 45,30 C45,45 15,45 15,30 C15,15 40,15 40,30 C40,40 20,40 20,30 C20,25 35,25 35,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              opacity="0.4"
            />
            <path
              d="M0 30 L15 15 L30 30 L15 45 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              opacity="0.2"
            />
            <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.1" />
            <circle cx="55" cy="55" r="1" fill="currentColor" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#indigenous-pattern)" />
      </svg>
    </div>
  );
};
