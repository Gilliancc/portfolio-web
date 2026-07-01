import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function SystemBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-8 bg-white/40 backdrop-blur-sm border-b border-white/20 flex items-center justify-between px-4 z-50 text-[#44403b] text-sm shadow-sm select-none">
      <div className="flex items-center gap-4">
        <span className="font-bold text-[#292524]">Gillian CHEN</span>
        <span className="text-[#57534d] text-xs opacity-80 hidden sm:inline-block">new_file  ˗ˏˋ ★ ˎˊ˗</span>
      </div>
      <div className="tabular-nums font-medium">
        {format(time, "EEE MMM d h:mm a")}
      </div>
    </div>
  );
}
