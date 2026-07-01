import React from 'react';
import { FileText, File } from 'lucide-react';

interface FolderIconProps {
  color: 'blue' | 'green' | 'pink';
  label: string;
}

export const FolderIcon: React.FC<FolderIconProps> = ({ color, label }) => {
  const colors = {
    blue: {
      light: 'bg-[#8ec5ff]',
      dark: 'bg-[#51a2ff]',
    },
    green: {
      light: 'bg-[#5ee9b5]',
      dark: 'bg-[#00d492]',
    },
    pink: {
      light: 'bg-[#fda5d5]',
      dark: 'bg-[#fb64b6]',
    },
  };

  const selectedColor = colors[color];

  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer w-24">
      <div className="relative w-20 h-16 transition-transform duration-200 group-hover:scale-105">
        {/* Back Tab */}
        <div className={`absolute top-0 left-0 w-20 h-14 rounded-xl ${selectedColor.light}`} />
        
        {/* Papers inside */}
        <div className="absolute top-1 left-3 w-12 h-12 bg-white rounded shadow-sm transform -rotate-6 border border-stone-100" />
        <div className="absolute top-0 left-5 w-12 h-14 bg-stone-50 rounded shadow-sm transform rotate-3 border border-stone-100 flex justify-center pt-1">
             <div className="w-8 h-1 bg-stone-200/50 rounded-full" />
        </div>

        {/* Front Pouch */}
        <div className={`absolute top-5 left-0 w-20 h-11 rounded-b-xl rounded-tr-xl ${selectedColor.dark} shadow-md flex items-center justify-center`}>
           <div className="w-full h-full bg-gradient-to-b from-white/20 to-transparent rounded-b-xl rounded-tr-xl" />
        </div>
      </div>
      
      {/* Label */}
      <div className="bg-white/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/20 shadow-sm">
        <p className="text-xs font-medium text-stone-800 text-center leading-none">{label}</p>
      </div>
    </div>
  );
};

export const TextFileIcon: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer w-24">
    <div className="relative w-16 h-20 bg-white rounded-lg border border-stone-200 shadow-sm flex flex-col items-start pt-4 pl-3 gap-2 overflow-hidden transition-transform duration-200 group-hover:scale-105">
      <div className="w-8 h-0.5 bg-stone-200 rounded-full" />
      <div className="w-8 h-0.5 bg-stone-200 rounded-full" />
      <div className="w-5 h-0.5 bg-stone-200 rounded-full" />
      <div className="w-8 h-0.5 bg-stone-200 rounded-full" />
      
      {/* Folded corner effect */}
      <div className="absolute top-0 right-0">
        <div className="w-4 h-4 bg-stone-100 shadow-sm transform translate-x-2 -translate-y-2 rotate-45" />
      </div>
      
      <div className="absolute top-0 right-0 w-4 h-4 bg-stone-50 border-b border-l border-stone-100 rounded-bl-sm" />
    </div>
    
    <div className="bg-white/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/20 shadow-sm">
      <p className="text-xs font-medium text-stone-800 text-center leading-none">{label}</p>
    </div>
  </div>
);

export const PDFFileIcon: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer w-24">
    <div className="relative w-16 h-20 bg-stone-50 rounded-lg border border-stone-200 shadow-sm transition-transform duration-200 group-hover:scale-105">
        <div className="absolute top-3 left-2 w-10 h-10 bg-red-100 rounded flex items-center justify-center border border-red-200">
            <span className="text-[10px] font-bold text-red-500">PDF</span>
        </div>
        <div className="absolute bottom-4 left-2 w-12 h-0.5 bg-stone-200 rounded-full" />
        <div className="absolute bottom-2 left-4 w-8 h-0.5 bg-stone-200 rounded-full" />
        
        <div className="absolute top-0 right-0 w-4 h-4 bg-white border-b border-l border-stone-200 rounded-bl-sm" />
    </div>

    <div className="bg-white/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/20 shadow-sm">
      <p className="text-xs font-medium text-stone-800 text-center leading-none">{label}</p>
    </div>
  </div>
);
