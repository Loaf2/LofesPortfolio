import React from "react";

export default function Header() {
  return (
    <div className="flex items-center headerWrapper flex-col">
      <div className="flex justify-between w-[80%] header h-[5rem] items-center">
        <div>
          <span className="font-bold text-[42px] leading-[48px] text-[#3772FF]">Lofe</span>
        </div>
        <div className="flex gap-5 text-[23px] font-semibold">
          <span>Projects</span>
          <span>About Me</span>
        </div>
      </div>
      <div className="h-[1px] bg-[#000000] opacity-10 w-full"></div>
    </div>
  );
}
