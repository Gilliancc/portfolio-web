import React, { useState, useEffect } from "react";

export function TopBar({ name }: { name: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="absolute top-0 left-0 w-full h-8 px-4 flex items-center justify-between bg-white/40 backdrop-blur-md border-b border-white/20 z-[1000] text-stone-700 text-sm">
      <div className="flex items-center gap-4">
        <span className="font-bold tracking-tight">{name}</span>
        <span className="text-xs opacity-60 text-[#302e2b]">new_file  ˗ˏˋ ★ ˎˊ˗</span>
      </div>
      <div className="font-medium tracking-tight opacity-80 text-[#120d08]">
        {formattedTime}
      </div>
    </div>
  );
}
