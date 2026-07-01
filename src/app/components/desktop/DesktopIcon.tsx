import { motion } from "motion/react";
import { Folder, FileText, File } from "lucide-react";
import { clsx } from "clsx";

interface DesktopIconProps {
  label: string;
  type: "folder" | "file" | "pdf";
  color?: "blue" | "pink" | "green" | "white";
  x: number;
  y: number;
  onDoubleClick: () => void;
  delay?: number;
}

export function DesktopIcon({ label, type, color = "blue", x, y, onDoubleClick, delay = 0 }: DesktopIconProps) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 w-20 group cursor-pointer"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onDoubleClick}
    >
      <div className="relative">
        {type === "folder" && (
          <div
            className={clsx(
              "w-16 h-14 rounded-lg shadow-md flex items-center justify-center relative",
              color === "blue" && "bg-blue-400 border-t-4 border-blue-300",
              color === "pink" && "bg-pink-400 border-t-4 border-pink-300",
              color === "green" && "bg-emerald-400 border-t-4 border-emerald-300"
            )}
          >
            {/* Paper inside folder */}
            <div className="absolute -top-1 left-2 w-12 h-6 bg-white/90 rounded-t-sm shadow-sm" />
            <div
              className={clsx(
                "absolute inset-0 rounded-lg shadow-inner bg-gradient-to-b from-white/20 to-transparent",
                color === "blue" && "bg-blue-500/10",
                color === "pink" && "bg-pink-500/10",
                color === "green" && "bg-emerald-500/10"
              )}
            />
            {/* Folder Front Flap effect */}
            <div className={clsx(
                "absolute bottom-0 w-full h-10 rounded-b-lg opacity-20 bg-black/10"
            )} />
          </div>
        )}
        
        {type === "file" && (
          <div className="w-12 h-16 bg-white rounded-md shadow-md flex items-center justify-center relative border border-gray-200">
             <div className="space-y-1 w-8">
                <div className="h-0.5 bg-gray-200 w-full"></div>
                <div className="h-0.5 bg-gray-200 w-2/3"></div>
                <div className="h-0.5 bg-gray-200 w-full"></div>
                <div className="h-0.5 bg-gray-200 w-full"></div>
             </div>
             {/* Folded corner */}
             <div className="absolute top-0 right-0 w-4 h-4 bg-gray-100 rounded-bl-md" />
          </div>
        )}

        {type === "pdf" && (
           <div className="w-12 h-16 bg-white rounded-md shadow-md flex items-center justify-center relative border border-gray-200">
            <div className="absolute top-4 w-8 h-8 flex items-center justify-center">
                 <FileText className="text-gray-300 w-full h-full" />
            </div>
            <div className="absolute top-2 right-2 px-1 py-0.5 bg-red-500 text-[8px] font-bold text-white rounded">PDF</div>
             {/* Folded corner */}
             <div className="absolute top-0 right-0 w-4 h-4 bg-gray-100 rounded-bl-md" />
           </div>
        )}
      </div>
      
      <span className="text-sm text-gray-800 font-medium bg-white/40 px-2 rounded-md backdrop-blur-sm shadow-sm border border-white/20">
        {label}
      </span>
    </motion.div>
  );
}
