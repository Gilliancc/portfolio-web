import React from 'react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

type FolderColor = 'blue' | 'green' | 'pink';

interface FigmaFolderIconProps {
  color: FolderColor;
  label: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const colors = {
  blue: {
    back: 'bg-[#8ec5ff]',
    front: 'bg-[#51a2ff]',
  },
  green: {
    back: 'bg-[#5ee9b5]',
    front: 'bg-[#00d492]',
  },
  pink: {
    back: 'bg-[#fda5d5]',
    front: 'bg-[#fb64b6]',
  },
};

export function FigmaFolderIcon({ color, label, onClick, onDoubleClick }: FigmaFolderIconProps) {
  const scheme = colors[color];

  return (
    <div 
      className="flex flex-col items-center gap-2 w-[80px] group cursor-pointer select-none"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <motion.div 
        className="relative w-[80px] h-[64px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Back Flap */}
        <div className={clsx("absolute top-[8px] left-0 w-[80px] h-[56px] rounded-[10px]", scheme.back)} />
        
        {/* Paper 1 */}
        <div className="absolute top-[5.6px] left-[9.6px] w-[52px] h-[52px] flex items-center justify-center rotate-[-6deg]">
           <div className="w-[48px] h-[48px] bg-white border border-[#f5f5f4] rounded-[2px] shadow-sm" />
        </div>
        
        {/* Paper 2 */}
        <div className="absolute top-[-1.2px] left-[18.6px] w-[50px] h-[58px] flex items-center justify-center rotate-[3deg]">
          <div className="w-[48px] h-[56px] bg-[#fafaf9] border border-[#f5f5f4] rounded-[2px] shadow-sm flex justify-center items-center">
             <div className="w-[30px] h-[5px] bg-[#e7e5e4] opacity-50" />
          </div>
        </div>

        {/* Front Flap */}
        <div className={clsx(
          "absolute top-[20px] left-0 w-[80px] h-[44px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shadow-md flex items-center justify-center",
          scheme.front
        )}>
          <div className="w-full h-full rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </motion.div>
      
      {/* Label */}
      <div className="bg-white/40 backdrop-blur-[2px] px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
        <span className="text-xs font-medium text-[#44403b] whitespace-nowrap">{label}</span>
      </div>
    </div>
  );
}
