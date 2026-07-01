import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function Messenger({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed top-12 right-8 z-[100]"
        >
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-stone-200 w-72 flex items-start gap-3 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold shrink-0">
              G
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">Message</span>
                <span className="text-[10px] text-stone-400">now</span>
              </div>
              <p className="text-sm font-medium text-stone-800">Hi, I’m Zheyan :)</p>
            </div>
            <button 
              onClick={onClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-md hover:bg-stone-50 transition-colors"
            >
              <X className="w-3 h-3 text-stone-500" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
