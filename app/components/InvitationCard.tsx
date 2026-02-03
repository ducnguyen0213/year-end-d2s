import React from 'react';
import Image from 'next/image';
import { eventConfig } from '../data/config';

// Icons
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function InvitationCard({ guestName = "Quý Khách" }: { guestName?: string }) {
  return (
    <div className="w-full flex items-center justify-center py-2 px-2 md:px-4">
      {/* 
        Container:
        - Mobile: w-full, max-w-[430px] (như cũ)
        - Tablet/Desktop: max-w-4xl (rộng hơn)
        - Background: White Glassmorphism (Sáng, sang trọng, không bị đen)
      */}
      <div className="w-full md:max-w-3xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden relative border border-white/50 animate-fade-in-up">
        
        {/* Decorative Top Bar (Logo Colors) */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-lime-500 to-sky-500"></div>

        <div className="p-6 md:p-10 text-center">
          
          {/* LOGO */}
          <div className="relative w-52 h-20 md:w-56 md:h-24 mx-auto mb-4 md:mb-6">
             <Image 
               src={eventConfig.company.logoUrl} 
               alt={eventConfig.company.name}
               fill
               className="object-contain" // Giữ màu gốc của logo
               priority
             />
          </div>

          {/* HEADER SECTION */}
          <div className="space-y-2 mb-6 md:mb-8 flex flex-col items-center">
            <p className="text-slate-500 text-lg md:text-xl font-semibold tracking-[0.2em] uppercase text-center">
              {eventConfig.invitation.greeting}
            </p>
            
            <h1 className="text-[1.35rem] md:text-[1.6rem] font-bold text-slate-900 tracking-tight text-center">
              {guestName}
            </h1>
            
            {/* Separator Line moved up and simplified */}
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-lime-400 mx-auto rounded-full"></div>
            
             <p className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto pt-2">
              {eventConfig.invitation.intro}
            </p>
          </div>

          {/* INFO SECTION: Grid on Desktop, Stack on Mobile */}
          <div className="bg-slate-50 rounded-xl p-5 md:p-8 border border-slate-100 mb-6 md:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              
              {/* Time Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-r md:border-slate-200 md:pr-8">
                <div className="flex items-center justify-center md:justify-start space-x-2 text-sky-600 font-bold uppercase text-xs tracking-wider mb-2">
                  <ClockIcon />
                  <span>Thời gian</span>
                </div>
                <div>
                  <p className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tighter">
                    {eventConfig.event.timeDisplay}
                  </p>
                  <p className="text-lime-600 font-semibold text-base md:text-lg uppercase mt-1">
                    {eventConfig.event.dateDisplay}
                  </p>
                </div>
              </div>

              {/* Location Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 text-sky-600 font-bold uppercase text-xs tracking-wider mb-2">
                  <LocationIcon />
                  <span>Địa điểm</span>
                </div>
                <a 
                  href={eventConfig.event.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full"
                >
                  <p className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors flex items-center justify-center md:justify-start">
                    {eventConfig.event.location.name}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed group-hover:text-slate-700">
                    {eventConfig.event.location.address}
                  </p>
                </a>
              </div>

            </div>
          </div>

          {/* FOOTER */}
          <div className="space-y-4">
            <p className="text-slate-700 font-medium text-xs md:text-base italic">
              "{eventConfig.invitation.closing}"
            </p>
            
            <div className="flex flex-col items-center justify-center pt-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">TM. Ban Lãnh Đạo</span>
              <span className="font-bold text-slate-900 text-sm md:text-base mt-1">{eventConfig.footer.signatoryRole}</span>
              {/* Tên ký dạng chữ ký cách điệu màu xanh thương hiệu */}
              <span className="text-2xl md:text-3xl font-serif text-sky-600 mt-1 italic">
                {eventConfig.footer.signatoryName}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}