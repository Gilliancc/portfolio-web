import React, { useState } from "react";
import { motion } from "motion/react";
import imgPixelDog from "figma:asset/b07fa7594b57190d5cce7050ff43894a6a9bf91d.png";

export function GrassEasterEgg() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-[100]">
      {/* Invisible interactive area for the dog */}
      <div 
        className="absolute bottom-4 right-12 w-16 h-16 pointer-events-auto cursor-pointer group"
        onClick={(e) => {
          e.stopPropagation();
          setShowText(!showText);
        }}
      >
        {/* Pixel Dog Animation */}
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img 
            src={imgPixelDog} 
            alt="Pixel Dog" 
            className="w-[56px] h-[56px] object-contain" 
            style={{ imageRendering: 'pixelated' }}
          />
        </motion.div>

        {showText && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-white border border-stone-200 rounded-lg shadow-lg text-[10px] font-mono text-stone-600 whitespace-nowrap"
          >
            Go and find the bones 🦴
          </motion.div>
        )}
      </div>

    </div>
  );
}
