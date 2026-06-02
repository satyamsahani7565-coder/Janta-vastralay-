import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { useStore } from '../context/StoreContext';

interface WelcomeOverlayProps {
  onComplete: () => void;
}

export default function WelcomeOverlay({ onComplete }: WelcomeOverlayProps) {
  const { storeInfo: STORE_INFO } = useStore();
  const [shouldSlideUp, setShouldSlideUp] = useState(false);

  useEffect(() => {
    // Stage 1: Trigger slide-up animation after 2.5 seconds
    const timerSlide = setTimeout(() => {
      setShouldSlideUp(true);
    }, 2500);

    // Stage 2: Tell parent that overlay has finished disappearing (lasts 1 second)
    const timerComplete = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timerSlide);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  return (
    <motion.div
      id="welcome-overlay"
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark text-white px-6 py-12"
      initial={{ y: 0 }}
      animate={shouldSlideUp ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background traditional pattern layer */}
      <div className="absolute inset-0 bg-maroon-mandala opacity-15 pointer-events-none" />

      {/* Elegant Golden Borders & Corners */}
      <div className="absolute inset-4 pointer-events-none border border-gold/30 rounded-lg">
        {/* Top-Left Corner */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-light" />
        {/* Top-Right Corner */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-light" />
        {/* Bottom-Left Corner */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-light" />
        {/* Bottom-Right Corner */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-light" />
      </div>

      {/* Decorative Traditional Arch (Toran) Header Accent */}
      <div className="flex justify-center w-full relative z-10 pointer-events-none">
        <svg className="w-64 h-8 text-gold opacity-85" viewBox="0 0 200 24" fill="currentColor">
          <path d="M0 0h200v2c-15 0-20 10-25 10s-10-10-25-10-20 10-25 10-10-10-25-10-20 10-25 10-10-10-25-10-20 10-25 10c-5 0-10-10-25-10V0z" />
        </svg>
      </div>

      {/* Main Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 max-w-2xl mx-auto">
        {/* Traditional Mandala Design */}
        <motion.div
          className="mb-6 relative flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Logo size="lg" />
        </motion.div>

        {/* Store Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className="text-gold uppercase tracking-[0.15em] font-serif font-bold text-sm sm:text-base block">
            — रिगौली बाजार की पुरानी दुकान —
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] tracking-wide leading-tight px-4 py-2 font-bold">
            {STORE_INFO.name}
          </h1>

          <p className="text-xs sm:text-sm text-neutral-200 font-sans tracking-widest uppercase font-semibold">
            कैम्पियरगंज, गोरखपुर • @{STORE_INFO.username}
          </p>

          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-3" />

          <p className="text-base sm:text-lg text-amber-100 font-serif italic tracking-wide max-w-lg mx-auto">
            "Tradition, Prestige, and Purity – The Complete Family Clothing Showroom"
          </p>
        </motion.div>
      </div>

      {/* Elegant Footer Accent */}
      <div className="text-center relative z-10 flex flex-col items-center gap-2">
        <motion.div 
          className="flex gap-1.5 items-center justify-center text-gold/60 text-xs tracking-widest uppercase font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span>Est. 1995</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
          <span>Pure Silk & Designer Wear</span>
        </motion.div>
        
        {/* Minimal Scrolling-Down Indicator */}
        <div className="w-1 h-8 bg-gradient-to-b from-gold/50 to-transparent mt-4 animate-bounce rounded-full" />
      </div>
    </motion.div>
  );
}
