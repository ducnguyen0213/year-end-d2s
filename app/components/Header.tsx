import React from 'react';
import { eventConfig } from '../data/config';

export default function Header() {
  return (
    <header className="w-full py-2 md:py-6 text-center space-y-2 relative z-20">
      {/* Title Area */}
      <div className="space-y-2 px-4">
        {/* Main Title: YEAR END PARTY 2025 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-widest uppercase animate-fade-in-down drop-shadow-[0_0_15px_rgba(14,165,233,0.6)] filter">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-sky-100">
            {eventConfig.event.title}
          </span>
        </h1>
        
        {/* Decorative Element */}
        <div className="flex justify-center items-center space-x-4 opacity-90 py-1">
          <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="h-2 w-2 md:h-3 md:w-3 bg-white rotate-45 shadow-[0_0_10px_rgba(255,255,255,1)] animate-pulse"></div>
          <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
        </div>

        {/* Subtitle: TIỆC TỔNG KẾT CUỐI NĂM - Made simpler and brighter */}
        <p className="text-xl md:text-3xl font-bold text-sky-200 tracking-[0.3em] uppercase drop-shadow-md animate-fade-in-up">
          {eventConfig.event.subtitle}
        </p>
      </div>
    </header>
  );
}