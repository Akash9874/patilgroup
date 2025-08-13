"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SafetyPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/safetyhero.JPG"
          alt="Safety"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full md:w-1/2 p-8 md:p-12 fade-in-section">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Railway Side Safety</h1>
          </div>
        </div>
      </div>

      {/* Protecting tracks / Securing Journeys */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-[#8A393B]">Protecting tracks</h2>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-amber-500">Securing Journeys</h3>
            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
              Patil Group builds practical, durable solutions to keep railway corridors safe and operational. From high speed routes to regional lines, our systems are made to prevent intrusions, reduce risks and ensure uninterrupted train movement.
            </p>
          </div>
        </div>
      </section>


      {/* Track fencing / Precast Safety Infrastructure */}
      <section className="relative bg-white text-black py-16">
        {/* Vertical borders to match design */}
        <div className="absolute inset-y-0 left-0 w-px bg-gray-300"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>

        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column headings */}
          <div className="slide-in-left">
            <h3 className="text-5xl md:text-6xl font-bold text-amber-500">Track fencing</h3>
            <h3 className="mt-16 text-5xl md:text-6xl font-bold text-[#8A393B] leading-tight">Precast Safety
              <br />Infrastructure</h3>
          </div>

          {/* Right column content with divider */}
          <div className="md:border-l border-gray-300 md:pl-8 slide-in-right">
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                <span className="font-semibold">W beam fence</span> — Galvanized steel with a corrugated W
                profile. Designed to stop animals, vehicles and trespassers from entering the track zone. Already in use along corridors such as Mumbai to Ahmedabad.
              </p>
              <p>
                <span className="font-semibold">Fixed knot wire fence</span> — High tensile mesh for reliable perimeter security. Quick to install, adaptable to uneven terrain and effective against human and animal entry.
              </p>
              <p>
                <span className="font-semibold">Crash barriers and security walls</span> — Shield work zones, protect trackside equipment and prevent unauthorized access.
              </p>
              <p>
                <span className="font-semibold">Platform copings</span> — Precision made with anti slip surfaces and tactile indicators to guide passengers safely.
              </p>
              <p>
                <span className="font-semibold">Cable troughs and drains</span> — Protect signaling and power lines while keeping tracks free from water damage.
              </p>
              <p>
                <span className="font-semibold">Noise barriers</span> — Reduce disturbance in residential areas and improve safety by limiting distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Made for Indian Railways - moved to last */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-4">
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-transparent to-[#F2913F]"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-amber-500 text-center whitespace-nowrap">Made for Indian Railways</h3>
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-l from-transparent to-[#F2913F]"></div>
          </div>
          <p className="mt-4 text-sm md:text-base text-gray-200 text-center max-w-3xl mx-auto">
            Every product is manufactured under strict quality control in a factory environment. This ensures consistent
            strength, precise dimensions and long service life — meeting the standards of modern railway operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;


