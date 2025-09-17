"use client";
import React from 'react';
import Image from 'next/image';
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
      <div className="relative">
        {/* Mobile Layout */}
        <div className="md:hidden h-screen relative">
          <img src="/preee.jpg" alt="Precast plinth" className="h-full w-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
                Precast plinth
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-base mt-4 font-medium">
                Modular track infrastructure
              </p>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block relative h-[600px]">
          <img src="/preee.jpg" alt="Precast plinth" className="h-full w-full object-cover z-0" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 z-20">
            <div className="px-6 sm:px-8 md:px-12 pb-16">
              <h1 className="text-white font-bold leading-[0.95] text-6xl md:text-7xl lg:text-8xl">
                Precast plinth
              </h1>
              <p className="text-gray-200 text-lg mt-4 font-medium">
                Modular track infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pre-cast Plinth Content Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10 relative">
        {/* Top Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '864px',
            height: '28px',
            left: '0px',
            top: '0px',
            background: 'linear-gradient(90deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <h2 className="text-[#8A393B] text-2xl sm:text-3xl md:text-6xl font-bold mb-8">
            Precast plinth
          </h2>
          
          <div className="space-y-6 text-black text-xl sm:text-3xl leading-relaxed">
            <p>
              Patil Rail Infrastructure Pvt. Ltd. and ITD Bangkok jointly developed an innovative modification to the existing plinth‑type track structure with its fastening system.
            </p>
            
            <p>
              In this system, the plinth is introduced as a precast element, compatible with the existing plinth structure and the 300‑1 fastening system.
            </p>
            
            <div>
              <p className="font-semibold text-black mb-4">This system offers the following advantages:</p>
              
              <ul className="space-y-2 text-black text-xl sm:text-3xl">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Cost‑effectiveness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Improved quality of work
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Time savings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Less work on site
                </li>
            </ul>
            </div>
            
            <p>
              Owing to these advantages, many metro authorities have shown keen interest in adopting this system in upcoming projects.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Situations Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10 relative">
        {/* Right Edge Gradient Line */}
        <div 
          className="absolute hidden lg:block fade-in-section"
          style={{
            width: '680 px',
            height: '28px',
            right: '0px',
            top: '40%',
            background: 'linear-gradient(270deg, #8A393B 0%, #1E3888 30%, #F2913F 60%, rgba(242, 145, 63, 0) 97.12%)'
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <h3 className="text-[#F2913F] text-2xl sm:text-3xl md:text-7xl font-bold mb-6">
              Plinth solutions can be implemented in the following situations:
            </h3>
            
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 text-black text-xl sm:text-2xl md:text-3xl">
            <div className="text-center sm:text-left">
              Elevated track
            </div>
            <div className="text-center sm:text-left">
              Depots
            </div>
            <div className="text-center sm:text-left">
              Tunnels and viaducts
            </div>
          </div>
        </div>
      </section>

      {/* Speed Specification Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <h3 className="text-[#8A393B] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            The urban‑metro plinth system is designed for speeds up to 110 km/h.
          </h3>
          <p className="text-black text-xl sm:text-2xl md:text-3xl leading-relaxed text-center">
            Our track record with this product positions us well for forthcoming urban‑metro projects in various cities.
          </p>
        </div>
      </section>

      {/* Project References Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 fade-in-section">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image 
                src="/precasttrack.jpeg" 
                alt="Precast track implementation" 
                width={800} 
                height={600} 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
                loading="lazy" 
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-[#8A393B] text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                This system has been used in:
              </h3>
              <ul className="space-y-2 text-black text-xl sm:text-2xl md:text-3xl">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Mumbai Metro Line 2A
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Bangalore Metro Reach 5
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Pune Metro
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                  Ahmedabad Metro
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary Section */}
      <section className="bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section">
          <p className="text-[#8A393B] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-justify">
            Its modular nature enables fast installation and minimal site disruption while maintaining structural integrity and alignment across straight and curved sections.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PrecastPlinthPage;