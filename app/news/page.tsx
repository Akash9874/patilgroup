"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-[#F1EFF0] text-gray-800 overflow-hidden">
      <Navbar />
      
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/train.png"
          alt="Train"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Bottom-left Overlay Text */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 z-10">
          <h1 className="text-white font-bold leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            In News
          </h1>
        </div>
      </section>

      {/* Our Latest News Section */}
      <section className="relative py-16 sm:py-20">
        {/* Background grid lines for subtle framing */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-300/60" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-300/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-clash font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#F2913F] to-[#8A393B]">
            Our Latest News
          </h2>

          {/* Content Card */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left image */}
            <div>
              <img
                src="/21_flash_butt_equipment.jpg"
                alt="Workshop"
                className="rounded-lg w-full h-[360px] sm:h-[420px] object-cover"
              />
            </div>

            {/* Right content */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8A393B] to-[#F2913F]">
                Modern Fastening for high speed trains.
              </h3>
              <p className="mt-6 text-gray-700 text-lg">
                Under the Atmanirbhar Bharat initiative, Patil Group has developed a modern fastening
                system for Indian Railways' ballasted tracks, supporting semi-high-speed (200 kmph) and
                heavy axle load operations with ±1 mm gauge tolerance.
              </p>

              <p className="mt-6 text-gray-900 font-semibold text-lg">Key innovations include:</p>
              <ul className="mt-3 space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><span className="mt-2 mr-3 block h-2 w-2 rounded-full bg-[#F2913F]" />High-precision PSC sleeper manufacturing</li>
                <li className="flex items-start"><span className="mt-2 mr-3 block h-2 w-2 rounded-full bg-[#F2913F]" />Specialized molds for accurate rail seat placement</li>
                <li className="flex items-start"><span className="mt-2 mr-3 block h-2 w-2 rounded-full bg-[#F2913F]" />GFN liners with tight tolerance controls</li>
              </ul>

              <p className="mt-6 text-gray-700 text-lg">
                Extensively validated by RDSO, the system enhances track stability, efficiency, and durability.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
