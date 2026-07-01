import React from "react";
import { motion } from "motion/react";

interface DesktopIconProps {
  label: string;
  type?: "folder" | "file" | "pdf";
  color?: "blue" | "pink" | "green";
  onDoubleClick: () => void;
}

export function DesktopIcon({ label, type = "folder", color = "blue", onDoubleClick }: DesktopIconProps) {
  const getFolderBaseColor = () => {
    switch (color) {
      case "pink": return "#fb64b6";
      case "green": return "#00d492";
      default: return "#51a2ff";
    }
  };

  const getFolderLightColor = () => {
    switch (color) {
      case "pink": return "#fda5d5";
      case "green": return "#5ee9b5";
      default: return "#8ec5ff";
    }
  };

  const renderIcon = () => {
    if (type === "folder") {
      return (
        <div className="relative h-[64px] w-[80px]">
          <div className="absolute h-[56px] left-0 rounded-[10px] top-[8px] w-[80px] shadow-sm" style={{ backgroundColor: getFolderLightColor() }} />
          <div className="absolute flex items-center justify-center left-[9.62px] size-[52.754px] top-[5.62px]">
            <div className="-rotate-6 flex-none">
              <div className="bg-white border border-[#f5f5f4] border-solid rounded-[2px] shadow-sm size-[48px]" />
            </div>
          </div>
          <div className="absolute flex h-[58.435px] items-center justify-center left-[18.57px] top-[-1.22px] w-[50.865px]">
            <div className="flex-none rotate-3">
              <div className="bg-[#fafaf9] content-stretch flex h-[56px] items-center justify-center pl-[1.209px] pr-px py-px relative rounded-[2px] w-[48px]">
                <div aria-hidden="true" className="absolute border border-[#f5f5f4] border-solid inset-0 pointer-events-none rounded-[2px] shadow-sm" />
                <div className="bg-[#e7e5e4] h-[5.565px] opacity-50 shrink-0 w-[30.168px]" />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[44px] items-center justify-center left-0 rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[20px] w-[80px]" style={{ backgroundColor: getFolderBaseColor() }}>
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[44px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px] shrink-0 to-[rgba(0,0,0,0)] w-[80px]" />
          </div>
        </div>
      );
    }

    if (type === "file") {
      return (
        <div className="relative bg-white border border-[#e7e5e4] border-solid h-[80px] overflow-clip rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_4px_0px_rgba(0,0,0,0.15)] w-[64px]">
          <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[78px] items-start left-0 pl-[12px] pt-[24px] top-0 w-[62px]">
            {[38, 38, 25.328, 38, 19].map((w, i) => (
              <div key={i} className="bg-[#e7e5e4] h-[2px] rounded-[33554400px] shrink-0" style={{ width: w }} />
            ))}
          </div>
          <div className="absolute left-[46px] size-[16px] top-0">
            <div className="absolute bg-[#f5f5f4] left-[-1px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-px" />
            <div className="absolute flex items-center justify-center left-[-16px] size-[16px] top-[-16px] rotate-180">
               <div className="border-[rgba(0,0,0,0)] border-b-16 border-l-16 border-solid size-[16px]" />
            </div>
          </div>
        </div>
      );
    }

    if (type === "pdf") {
      return (
        <div className="relative bg-white border border-[#e7e5e4] border-solid h-[80px] overflow-clip rounded-[6px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_4px_0px_rgba(0,0,0,0.15)] w-[64px]">
           <div className="absolute bg-[#fafaf9] h-[80px] left-0 top-0 w-[62px]">
              <div className="absolute bg-[#ffe2e2] content-stretch flex items-center justify-center left-[11px] pl-px pr-[1.016px] py-px rounded-[6px] size-[40px] top-[16px] border border-[#ffc9c9]">
                 <span className="font-bold text-[#fb2c36] text-[10px] tracking-[0.1172px]">PDF</span>
              </div>
              <div className="absolute bg-[#e7e5e4] h-[2px] left-[4px] top-[68px] w-[54px]" />
              <div className="absolute bg-[#e7e5e4] h-[2px] left-[13px] top-[74px] w-[35.984px]" />
           </div>
           <div className="absolute left-[46px] size-[16px] top-0">
            <div className="absolute bg-[#f5f5f4] left-[-1px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[16px] top-px" />
            <div className="absolute flex items-center justify-center left-[-16px] size-[16px] top-[-16px] rotate-180">
               <div className="border-[rgba(0,0,0,0)] border-b-16 border-l-16 border-solid size-[16px]" />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center gap-2 group cursor-default relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={onDoubleClick}
    >
      <div className="flex items-center justify-center">
        {renderIcon()}
      </div>
      
      <div className="rounded-[8px] bg-[rgba(255,255,255,0.4)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] px-[8px] py-[0px]"><span className="text-[12px] font-medium text-[#44403b] whitespace-nowrap">{label}</span></div>
    </motion.div>
  );
}
