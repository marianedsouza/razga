/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { Hero } from "./components/sections/Hero";
import { Identification } from "./components/sections/Identification";
import { WhatIsRazga } from "./components/sections/WhatIsRazga";
import { Story } from "./components/sections/Story";
import { About } from "./components/sections/About";
import { Community } from "./components/sections/Community";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FinalClosure } from "./components/sections/FinalClosure";
import { Footer } from "./components/sections/Footer";
import { ShareButton } from "./components/ui/ShareButton";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax for Hero
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main ref={containerRef} className="relative">
      {/* Grain Overlay for texture */}
      <div className="grain" />

      {/* Progress Bar - Subtle indicator of the journey */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-razga-accent z-50 origin-left"
        style={{ scaleX: scaleProgress }}
      />

      <ShareButton />

      <Hero heroY={heroY} />
      <Identification />
      <WhatIsRazga />
      <Story />
      <About />
      <Community />
      <HowItWorks />
      <FinalClosure />
      <Footer />
    </main>
  );
}
