import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-[244px] hero font-[Fira_Sans]">
      <div className="introStart bg-gradient-to-r from-[#3772FF] to-[#0145E7] bg-clip-text text-[59px] leading-[72px]">
        <h1>Hey there, I'm Lofe</h1>
      </div>
      <div className="text-[119px] leading-[144px]">
        <span>Freelance Web Developer</span>
      </div>
      <div>
        <button className="w-[279px] h-[68px] rounded-[32px] bg-[#3772FF] text-white mt-[88px] text-[21px] leading-[30px] flex items-center justify-center gap-5">
          See some work{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#CACBD2"
            strokeWidth="8"
            viewBox="0 0 64 64"
            style={{ width: 32, height: 32 }}
            className="duration-300 transform transition-all"
          >
            <path d="M6.53 18.86l26.63 25.26 24.26-25.26"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
