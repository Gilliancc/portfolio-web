import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

type FileType = 'txt' | 'pdf';

interface FigmaFileIconProps {
  type: FileType;
  label: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

export function FigmaFileIcon({ type, label, onClick, onDoubleClick }: FigmaFileIconProps) {
  return (
    <div 
      className="flex flex-col items-center gap-2 w-[64px] group cursor-pointer select-none"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <motion.div 
        className="relative w-[64px] h-[80px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main Paper */}
        <div className="absolute top-0 left-0 w-[64px] h-[80px] bg-white border border-[#e7e5e4] rounded-[6px] shadow-sm overflow-hidden">
          {/* Content */}
          <div className="p-3 flex flex-col gap-2">
            {type === 'txt' ? (
              <>
                <div className="w-[38px] h-[2px] bg-[#e7e5e4] rounded-full" />
                <div className="w-[38px] h-[2px] bg-[#e7e5e4] rounded-full" />
                <div className="w-[25px] h-[2px] bg-[#e7e5e4] rounded-full" />
                <div className="w-[38px] h-[2px] bg-[#e7e5e4] rounded-full" />
                <div className="w-[19px] h-[2px] bg-[#e7e5e4] rounded-full" />
              </>
            ) : (
              // PDF Style
              <>
                <div className="w-[40px] h-[40px] bg-[#ffe2e2] border border-[#ffc9c9] rounded-[6px] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-[#fb2c36]">PDF</span>
                </div>
                <div className="w-[54px] h-[2px] bg-[#e7e5e4] rounded-full mt-2 -ml-2" />
                <div className="w-[36px] h-[2px] bg-[#e7e5e4] rounded-full -ml-1" />
              </>
            )}
          </div>

          {/* Folded Corner (Bottom Left) - This was in Figma as a separate piece?
             Actually Figma has a blue strip for TXT and red strip for PDF at the bottom?
             Looking at Container34 (Blue strip) and Container44 (Red strip). 
             Wait, looking closer at Container27... Container34 is h-0 ? Maybe it's hidden or very thin.
             Ah, Container35 has the fold. It's a triangle.
          */}
          
          {/* Let's simulate the fold in the top-right or bottom-left as per standard icon design, 
              but Figma has a specific "dog-ear" or color strip.
              The Figma code has `Container35` with `border-b-16 border-l-16`. 
              It seems to be a fold.
           */}
           
        </div>
        
        {/* The color strip at bottom? No, Container34 has h-0. It's invisible? */}
        
        {/* Let's just add a subtle fold effect for detail */}
        <div className="absolute top-0 right-0 w-[16px] h-[16px] bg-[#f5f5f4] shadow-sm rounded-bl-[4px]" />
      </motion.div>

      {/* Label */}
      <div className="bg-white/40 backdrop-blur-[2px] px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
        <span className="text-xs font-medium text-[#44403b] whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
}
