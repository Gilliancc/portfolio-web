import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Maximize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  zIndex: number;
  onFocus: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
}

export const DesktopWindow: React.FC<WindowProps> = ({ 
  id, 
  title, 
  isOpen, 
  onClose, 
  zIndex, 
  onFocus, 
  children,
  initialPosition = { x: 100, y: 100 }
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          layoutId={id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute bg-[#f5f5f4] border border-stone-300 rounded-lg shadow-xl overflow-hidden flex flex-col w-[600px] h-[400px]"
          style={{ 
            zIndex,
            left: initialPosition.x,
            top: initialPosition.y,
          }}
          onClick={onFocus}
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.02 }}
        >
          {/* Title Bar */}
          <div className="bg-stone-200 border-b border-stone-300 h-8 flex items-center justify-between px-2 cursor-move" onPointerDown={(e) => e.stopPropagation()}>
            <span className="text-sm font-medium text-stone-700 select-none ml-2">{title}</span>
            <div className="flex gap-1">
              <button 
                className="p-1 hover:bg-stone-300 rounded transition-colors text-stone-500"
                aria-label="Minimize"
              >
                <Minus size={12} />
              </button>
              <button 
                className="p-1 hover:bg-stone-300 rounded transition-colors text-stone-500"
                aria-label="Maximize"
              >
                <Maximize2 size={12} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="p-1 hover:bg-red-200 hover:text-red-600 rounded transition-colors text-stone-500"
                aria-label="Close"
              >
                <X size={12} />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-auto p-4 bg-stone-50 cursor-default" onPointerDown={(e) => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
