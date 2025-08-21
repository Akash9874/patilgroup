"use client";

import React from 'react';
import Image from 'next/image';
import { TypingAnimation } from '@/components/TypingAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SafetyPage = () => {
  useScrollAnimation();
  return (
    <div className="bg-white text-black">
      {/* Responsive Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[600px]">
        {/* Background Image */}
        <Image
          src="/safetyside.jpg"
          alt="Safety"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
          priority
        />
        
        {/* Mobile Layout */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Rail wayside safety
                </h1>
                <div className="w-16 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-200 text-sm mt-3">Protecting tracks, securing journeys</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center">
            <div className="w-full md:w-1/2 p-8 md:p-12 fade-in-section">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Rail wayside safety</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Protecting tracks / Securing Journeys */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            <TypingAnimation
              text="Protecting tracks"
              showCursor
              speed={70}
              className="text-2xl sm:text-3xl font-bold text-[#8A393B]"
              cursorColor="#8A393B"
            />
            <TypingAnimation
              text="Securing Journeys"
              showCursor
              speed={70}
              className="text-xl sm:text-2xl font-bold text-amber-500"
              cursorColor="#F2913F"
            />
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed px-4">
              Patil Group builds practical, durable solutions to keep railway corridors safe and operational. From high speed routes to regional lines, our systems are made to prevent intrusions, reduce risks and ensure uninterrupted train movement.
            </p>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
        </div>
      </section>


      {/* Responsive Track fencing / Precast Safety Infrastructure */}
      <section className="relative bg-white text-black py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Headers */}
            <div className="text-center mb-8 fade-in-section">
              <h3 className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">Track fencing</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-[#8A393B] mx-auto mb-4 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#8A393B] leading-tight">
                Precast Safety Infrastructure
              </h3>
            </div>
            
            {/* Mobile Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/safety2.jpg"
                  alt="Railway track fencing"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/safety3.jpg"
                  alt="Safety systems"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Mobile Content Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "W beam fence",
                  content: "Galvanized steel with a corrugated W profile. Designed to stop animals, vehicles and trespassers from entering the track zone. Already in use along corridors such as Mumbai to Ahmedabad."
                },
                {
                  title: "Fixed knot wire fence",
                  content: "High tensile mesh for reliable perimeter security. Quick to install, adaptable to uneven terrain and effective against human and animal entry."
                },
                {
                  title: "Crash barriers and security walls",
                  content: "Shield work zones, protect trackside equipment and prevent unauthorized access."
                },
                {
                  title: "Platform copings",
                  content: "Precision made with anti slip surfaces and tactile indicators to guide passengers safely."
                },
                {
                  title: "Cable troughs and drains",
                  content: "Protect signaling and power lines while keeping tracks free from water damage."
                },
                {
                  title: "Noise barriers",
                  content: "Reduce disturbance in residential areas and improve safety by limiting distractions."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300 fade-in-section">
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-3 flex items-center">
                    <div className="w-2 h-2 bg-[#F2913F] rounded-full mr-3"></div>
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-5">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden lg:block">
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
        </div>
      </section>



      {/* Responsive Made for Indian Railways */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Mobile Layout */}
          <div className="md:hidden text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-500 mb-4">Made for Indian Railways</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto mb-4 rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Every product is manufactured under strict quality control in a factory environment. This ensures consistent strength, precise dimensions and long service life — meeting the standards of modern railway operations.
              </p>
            </div>
          </div>
          
          {/* Desktop Layout - Original */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#F2913F]"></div>
              <h3 className="text-4xl md:text-6xl font-bold text-amber-500 text-center whitespace-nowrap">Made for Indian Railways</h3>
              <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#F2913F]"></div>
            </div>
            <p className="mt-4 text-base md:text-lg text-gray-200 text-center max-w-3xl mx-auto">
              Every product is manufactured under strict quality control in a factory environment. This ensures consistent
              strength, precise dimensions and long service life — meeting the standards of modern railway operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;


