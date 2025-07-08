"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';

const NewsPage = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-[#1E1E1E] text-white">
      <Navbar />
      
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 h-full w-full">
          <img src="/train.png" alt="Train" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left side with "In News" title */}
          <div className="flex items-center justify-center">
            <div className="text-left px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl md:text-8xl font-bold text-amber-500 animate-fadeInUp">
                In News
              </h1>
            </div>
          </div>

          {/* Right side with black cut and text */}
          <div 
            className="h-full bg-[#1E1E1E] flex items-center"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="space-y-6 animate-fadeInUp w-full pl-[30%] pr-8 lg:pr-16">
              <h2 className="text-5xl font-bold leading-tight">
                Lorem Ipsum llll
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Our Latest News Section */}
      <section className="bg-white text-gray-800 py-20 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side with grey shape */}
          <div className="bg-gray-200 h-[550px]" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}></div>

          {/* Right side with text content */}
          <div className="px-4 sm:px-6 lg:px-8 -ml-16">
            <h2 className="text-6xl font-clash font-bold text-[#8A393B] mb-12">
                Our Latest News
            </h2>
            <h3 className="text-2xl font-bold mb-4">Modern Fastening for high speed trains.</h3>
            <p className="text-gray-600 mb-4">
              Under the Atmanirbhar Bharat initiative, Patil Group has developed a modern fastening system for Indian Railways' ballasted tracks, supporting semi-high-speed (200 kmph) and heavy axle load operations with ±1 mm gauge tolerance.
            </p>
            <p className="text-gray-600 font-semibold mb-4">Key innovations include:</p>
            <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
              <li>High-precision PSC sleeper manufacturing</li>
              <li>Specialized molds for accurate rail seat placement</li>
              <li>GFN liners with tight tolerance controls</li>
            </ul>
            <p className="text-gray-600">
              Extensively validated by RDSO, the system enhances track stability, efficiency, and durability.
            </p>
            <div className="flex items-center space-x-4 mt-8">
                <button className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NewsPage; 