"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BallastlessTrackMainLinePage = () => {
  useScrollAnimation();

  return (
    <div>
      <Navbar />
      <section className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="text-center px-6">
              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                  Ballastless Track System for Main Line
                </h1>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
                <p className="text-gray-200 text-sm mt-4 font-medium">
                  High-Performance Railway Infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-screen bg-black">
          <div className="absolute inset-0 h-full w-full">
            <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight px-4">
              Ballastless Track<br />System for Main Line
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 sm:py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-4xl leading-relaxed">
              In main line applications such as tunnels, bridges, and station zones, ballastless track offers a durable, low-maintenance alternative to conventional systems. Our design accommodates high-speed movement, continuous loading, and complex terrain.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-16 md:mt-24 fade-in-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="order-2 md:order-1 md:pt-16">
                <Image
                  src="/19_ballastless_mainline_banner.jpg"
                  alt="Ballastless main line banner"
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8A393B] mb-4">
                  This system is currently in use in:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                  <li>Jammu-Baramulla Line (Jammu & Kashmir)</li>
                  <li>Dedicated Freight Corridor sections</li>
                  <li>Northern Railways bridge zones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-24 max-w-5xl fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#F2913F] leading-relaxed">
              Engineered for long operational life with minimal intervention, the system ensures stable geometry, reduced deflection, and consistent track performance under both freight and passenger traffic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallastlessTrackMainLinePage; 