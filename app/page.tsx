import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import InvitationCard from './components/InvitationCard';

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const searchParams = await props.searchParams;
  const guestName = typeof searchParams.guest === 'string' ? searchParams.guest : "Lãnh đạo, Nhân viên công ty D2S";

  return (
    <main className="min-h-screen flex flex-col items-center justify-between font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden relative">
      
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Event Background"
          fill
          priority
          className="object-cover object-top"
          quality={100}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8 animate-fade-in-up relative z-10">
        
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <div className="my-2 md:my-4 animate-float">
          <InvitationCard guestName={guestName} />
        </div>

        {/* Footer Section */}
        <Footer />
        
      </div>
    </main>
  );
}
