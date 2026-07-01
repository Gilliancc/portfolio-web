import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Minus, Square, ChevronLeft, Copy } from "lucide-react";
import { WindowData } from "../Desktop";

interface WindowProps {
  data: WindowData;
  onClose: () => void;
  onFocus: () => void;
  onBack?: () => void;
}

export function Window({ data, onClose, onFocus, onBack }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  // ── FullScreen mode: no title bar, 100vw/100vh, floating close ──
  if (data.fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseDown={onFocus}
        className="fixed inset-0 z-[9999] bg-stone-50 overflow-hidden flex flex-col"
        style={{ zIndex: Math.max(data.zIndex, 9999) }}
      >
        {/* Floating Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
            audio.volume = 0.05;
            audio.play().catch(() => {});
            onClose();
          }}
          className="fixed top-4 right-4 z-[10000] w-8 h-8 flex items-center justify-center rounded-full bg-stone-900/60 hover:bg-stone-900/80 text-white/70 hover:text-white backdrop-blur-sm transition-all duration-200 border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content fills entire viewport */}
        <div className="flex-1 overflow-auto">
          {data.content}
        </div>
      </motion.div>
    );
  }

  // ── Standard window mode ──
  const windowStyles = isMaximized ? {
    width: '100vw',
    height: '100vh',
    left: 0,
    top: 0,
    zIndex: Math.max(data.zIndex, 2000),
    borderRadius: 0,
  } : data.size === '80%' ? {
    width: '80vw',
    height: '80vh',
    left: '10vw',
    top: '10vh',
    zIndex: data.zIndex,
  } : data.isCentered ? {
    width: data.width || 600,
    height: 500,
    left: `calc(50vw - ${(data.width || 600) / 2}px)`,
    top: 'calc(50vh - 250px)',
    zIndex: data.zIndex,
  } : {
    zIndex: data.zIndex,
    minWidth: data.type === "file" ? 400 : 600,
    height: data.type === "file" ? 300 : 500,
    left: "30%",
    top: "20%"
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      drag={!isMaximized}
      dragMomentum={false}
      onMouseDown={onFocus}
      className={`absolute bg-stone-50 shadow-2xl border border-stone-300 overflow-hidden flex flex-col ${isMaximized ? '' : 'rounded-t-lg'}`}
      style={windowStyles}
    >
      {/* Title Bar */}
      <div className={`h-10 bg-white border-b border-stone-200 flex items-center justify-between px-4 shrink-0 ${isMaximized ? '' : 'cursor-move'}`}>
        <div className="flex items-center gap-2">
          {onBack ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBack();
              }}
              className="p-1 hover:bg-stone-100 rounded-md transition-colors text-stone-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          ) : (
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: data.headerColor || (data.type === "folder" ? "#60a5fa" : "#a8a29e") }}
            />
          )}
          <span className="text-xs font-semibold text-stone-700 tracking-tight">{data.title}</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-1.5 hover:bg-stone-100 rounded text-stone-400 transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            className="p-1.5 hover:bg-stone-100 rounded text-stone-400 transition-colors"
          >
            {isMaximized ? <Copy className="w-2.5 h-2.5 rotate-180" /> : <Square className="w-2.5 h-2.5" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
              const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
              audio.volume = 0.05;
              audio.play().catch(() => {});
            }}
            className="p-1.5 hover:bg-red-500 hover:text-white rounded text-stone-400 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white">
        {data.content}
      </div>
    </motion.div>
  );
}
