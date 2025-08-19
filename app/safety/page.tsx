"use client";

import React from 'react';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SafetyPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/safetyside.jpg"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Rail wayside safety</h1>
          </div>
        </div>
      </div>

      {/* Protecting tracks / Securing Journeys */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="text-left">
            <TypingAnimation
              text="Protecting tracks"
              showCursor
              speed={70}
              className="text-4xl md:text-6xl font-bold text-[#8A393B]"
              cursorColor="#8A393B"
            />
          </div>
          <div className="text-center">
            <TypingAnimation
              text="Securing Journeys"
              showCursor
              speed={70}
              className="text-2xl md:text-4xl font-bold text-amber-500"
              cursorColor="#F2913F"
            />
            <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl mx-auto">
              Patil Group builds practical, durable solutions to keep railway corridors safe and operational. From high speed routes to regional lines, our systems are made to prevent intrusions, reduce risks and ensure uninterrupted train movement.
            </p>
          </div>
        </div>
      </section>


      {/* Track fencing / Precast Safety Infrastructure */}
      <section className="relative bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - All content */}
            <div className="lg:col-span-2 slide-in-left">
              {/* Main headings */}
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-amber-500 mb-8">Track fencing</h3>
              
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#8A393B] leading-tight mb-16">
                Precast Safety<br />Infrastructure
              </h3>

              {/* Content sections with spacing */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">W beam fence</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    Galvanized steel with a corrugated W profile. Designed to stop animals, vehicles and trespassers from entering the track zone. Already in use along corridors such as Mumbai to Ahmedabad.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Fixed knot wire fence</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    High tensile mesh for reliable perimeter security. Quick to install, adaptable to uneven terrain and effective against human and animal entry.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Crash barriers and security walls</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    Shield work zones, protect trackside equipment and prevent unauthorized access.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Platform copings</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    Precision made with anti slip surfaces and tactile indicators to guide passengers safely.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Cable troughs and drains</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    Protect signaling and power lines while keeping tracks free from water damage.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">Noise barriers</h4>
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                    Reduce disturbance in residential areas and improve safety by limiting distractions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Images */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-8">
                {/* First safety image */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/safety2.jpg"
                    alt="Railway track fencing and safety infrastructure"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Second safety image */}
                <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/safety3.jpg"
                    alt="Railway tracks and safety systems"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Made for Indian Railways - moved to last */}
      <section className="bg-black text-white py-16 fade-in-section">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-4">
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-transparent to-[#F2913F]"></div>
            <h3 className="text-4xl md:text-6xl font-bold text-amber-500 text-center whitespace-nowrap">Made for Indian Railways</h3>
            <div className="hidden md:block flex-1 h-1 bg-gradient-to-l from-transparent to-[#F2913F]"></div>
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-200 text-center max-w-3xl mx-auto">
            Every product is manufactured under strict quality control in a factory environment. This ensures consistent
            strength, precise dimensions and long service life — meeting the standards of modern railway operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;


