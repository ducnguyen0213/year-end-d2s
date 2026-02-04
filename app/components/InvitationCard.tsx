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

const LocationIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* INFO SECTION: Vertical Timeline */}
          <div className="bg-slate-50 rounded-xl p-5 md:p-8 border border-slate-100 mb-6 md:mb-8 text-left overflow-visible">
            <div className="relative pr-4 max-w-xl mx-auto">
              {/* Date Header: Căn thẳng hàng với nội dung timeline */}
              <p className="pl-14 md:pl-16 text-sky-600 font-bold text-base md:text-lg uppercase tracking-wider mb-6 md:mb-8">
                {eventConfig.event.dateDisplay}
              </p>

              {/* Trục dọc timeline: Gradient theo màu logo (xanh dương → xanh lá) */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-sky-200 to-lime-300 rounded-full"
                aria-hidden
              />

              {eventConfig.event.timeline.map((item, index) => {
                const isLime = index === 1; // Mốc 2 dùng xanh lá (logo có 2 màu)
                const dotColor = isLime ? 'bg-lime-500' : 'bg-sky-500';
                const timeColor = isLime ? 'text-lime-600' : 'text-sky-600';
                const linkHover = isLime ? 'group-hover:text-lime-600' : 'group-hover:text-sky-600';
                const iconHover = isLime ? 'group-hover:text-lime-500' : 'group-hover:text-sky-500';
                return (
                <div
                  key={index}
                  className="relative pb-8 pl-14 md:pl-16 last:pb-0"
                >
                  {/* Dot (node): Xen kẽ xanh dương / xanh lá theo logo */}
                  <div
                    className={`absolute left-[5px] top-1 w-6 h-6 md:w-[26px] md:h-[26px] rounded-full border-4 border-white shadow-sm flex items-center justify-center z-10 ${dotColor}`}
                    aria-hidden
                  />
                  
                  {/* Nội dung bên phải trục */}
                  <div className="min-w-0 overflow-visible">
                    {/* 1. Thời gian & Tên sự kiện: Flex-wrap để responsive tốt */}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0 pt-1">
                      {/* Cụm 1: Giờ + Gạch nối (Luôn đi cùng nhau, không ngắt dòng) */}
                      <div className="flex items-baseline gap-3 shrink-0 whitespace-nowrap">
                        <p className={`${timeColor} font-bold text-xl md:text-2xl tracking-tight leading-none`}>
                          {item.time}
                        </p>
                        <span className="text-slate-300 font-light text-xl select-none">—</span>
                      </div>
                      
                      {/* Cụm 2: Tên sự kiện (Xuống dòng nguyên khối nếu thiếu chỗ) */}
                      <p className="text-slate-800 font-bold text-lg md:text-xl leading-tight">
                        {item.label}
                      </p>
                    </div>

                    {/* Khối Địa điểm + Địa chỉ (Gom nhóm rõ ràng) */}
                    <div className="mt-2.5">
                      <a
                        href={item.location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 group"
                      >
                        <LocationIcon className={`h-4 w-4 text-slate-400 shrink-0 mt-1 transition-colors ${iconHover}`} />
                        <div>
                          <span className={`block text-slate-700 text-sm md:text-base font-semibold transition-colors ${linkHover}`}>
                            {item.location.name}
                          </span>
                          {/* Địa chỉ chi tiết: Tăng font-weight, line-height */}
                          {item.location.address && (
                            <span className={`block text-slate-500 text-xs md:text-sm font-medium mt-0.5 leading-relaxed ${linkHover}`}>
                              {item.location.address}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          </div>

          {/* FOOTER */}
          <div className="space-y-4">
            
            <div className="flex flex-col items-center justify-center pt-2 gap-3 md:gap-4">
              <span className="font-semibold text-slate-900 text-xl md:text-2xl">{eventConfig.footer.signatoryRole}</span>
              {/* Tên ký dạng chữ ký cách điệu màu xanh thương hiệu */}
              <span className="text-2xl md:text-3xl font-serif text-sky-600 italic">
                {eventConfig.footer.signatoryName}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}