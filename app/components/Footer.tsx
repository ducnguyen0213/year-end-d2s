import React from 'react';
import { eventConfig } from '../data/config';

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 text-center relative z-10">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center space-y-5">
        
        {/* Company Info Block */}
        <div className="space-y-2">
          <p className="font-bold text-white text-base md:text-lg uppercase tracking-wider drop-shadow-sm">
            {eventConfig.company.name}
          </p>
          <a 
            href={eventConfig.company.website} 
            target="_blank" 
            rel="noreferrer" 
            className="block text-sm md:text-base text-sky-300 hover:text-white transition-colors tracking-wide font-medium"
          >
            {eventConfig.company.website.replace('https://', '').replace(/\/$/, '')}
          </a>
        </div>
        
        {/* Safety Note - Highlighted */}
        <div className="w-full max-w-lg mx-auto mt-2">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20 shadow-lg">
            <p className="text-xs md:text-sm text-white font-medium leading-relaxed">
              * {eventConfig.footer.note}
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-slate-300 uppercase tracking-widest pt-4 font-medium opacity-80">
          © 2026 D2S Software JSC. All rights reserved.
        </p>

      </div>
    </footer>
  );
}