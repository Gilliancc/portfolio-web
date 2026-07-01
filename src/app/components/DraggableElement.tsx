import React from "react";
import { motion } from "motion/react";

interface DraggableElementProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  rotation?: number;
}

export function DraggableElement({ children, initialX, initialY, rotation = 0 }: DraggableElementProps) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 1000, top: -100, bottom: 800 }}
      dragElastic={0.1}
      dragTransition={{ power: 0.2, timeConstant: 200 }}
      initial={{ x: initialX, y: initialY, rotate: rotation }}
      className="absolute cursor-grab active:cursor-grabbing z-10"
      whileHover={{ scale: 1.02 }}
      whileDrag={{ scale: 1.05, zIndex: 50 }}
    >
      {children}
    </motion.div>
  );
}
