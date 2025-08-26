"use client";
import React from 'react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { ArrowRight } from 'lucide-react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PrecastPlinthPage = () => {
  useScrollAnimation();

  const sliderData = [
    { image: '/23_precast_plinth_process.jpg' },
    { image: '/25_alternate_material_CMA.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <img src="/preeeeeee.jpg" alt="Precast Plinth" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        {/* Centered Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Precast Plinth
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-sm sm:text-base mt-4 font-medium">
                Modular Track Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precast Plinth Content Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A393B] mb-6 sm:mb-8">Pre-cast Plinth</h2>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            <p>
              Patil Rail Infrastructure Pvt. Ltd and ITD Bangkok together developed an innovative modification to the existing plinth type track structure adopted with fastening system.
            </p>
            
            <p>
              In this system, we bring in the plinth as a pre-cast element, same as the existing plinth structure to be used 300-1 fastening system.
            </p>
            
            <p className="font-semibold text-white">Such a system brings in the following advantages:</p>
            
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
              <li>Cost effectiveness</li>
              <li>Better quality of work</li>
              <li>Time saving</li>
              <li>Lesser quantum of work on site</li>
            </ul>
            
            <p>
              Due to the above advantages, many Metro authorities are showing keen interest in this system and are willing to adopt it in their upcoming projects.
            </p>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-500 mt-6 sm:mt-8 mb-3 sm:mb-4">
              The Plinth Solutions can be implemented in the following situations:
            </h3>
            
            <ol className="list-decimal list-inside space-y-2 ml-2 sm:ml-4">
              <li>Elevated track</li>
              <li>Depots</li>
              <li>Tunnels & viaducts.</li>
            </ol>
            
            <p className="font-semibold text-white">
              Plinth system of Urban Metro is meant for speeds up to 110 kmph.
            </p>
            
            <p>
              Our varied references in this product make us hopeful to aspire for further forthcoming urban metro projects in various cities.
            </p>
          </div>
        </div>
      </section>

      {/* Used In Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-24 lg:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 fade-in-section">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img src="/precasttrack.jpeg" alt="Precast track technology" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-xl order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8A393B] leading-relaxed">This system has been used in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-base sm:text-lg">
                <li>Mumbai Metro Line 2A</li>
                <li>Bangalore Metro Reach 5</li>
                <li>Pune Metro</li>
                <li>Ahmedabad Metro</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-24 max-w-4xl fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl text-orange-400 leading-relaxed">
              Its modular nature enables speed of installation and minimal site disruption, while maintaining structural integrity and alignment across straight and curved sections.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrecastPlinthPage;