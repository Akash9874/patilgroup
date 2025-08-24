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
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img src="/preeeeeee.jpg" alt="Precast Plinth" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight animate-fadeInUp px-4">
            Precast Plinth
          </h1>
        </div>
      </section>

      {/* Precast Plinth Content Section */}
      <section className="bg-black text-white py-20 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8A393B] mb-8">Pre-cast Plinth</h2>
          
          <div className="space-y-6 text-xl md:text-2xl lg:text-2xl text-gray-200 leading-relaxed">
            <p>
              Patil Rail Infrastructure Pvt. Ltd and ITD Bangkok together developed an innovative modification to the existing plinth type track structure adopted with fastening system.
            </p>
            
            <p>
              In this system, we bring in the plinth as a pre-cast element, same as the existing plinth structure to be used 300-1 fastening system.
            </p>
            
            <p className="font-semibold text-white">Such a system brings in the following advantages:</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cost effectiveness</li>
              <li>Better quality of work</li>
              <li>Time saving</li>
              <li>Lesser quantum of work on site</li>
            </ul>
            
            <p>
              Due to the above advantages, many Metro authorities are showing keen interest in this system and are willing to adopt it in their upcoming projects.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-bold text-amber-500 mt-8 mb-4">
              The Plinth Solutions can be implemented in the following situations:
            </h3>
            
            <ol className="list-decimal list-inside space-y-2 ml-4">
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
      <section className="bg-black text-white py-24 sm:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 fade-in-section">
            <div className="md:w-1/2">
              <img src="/precasttrack.jpeg" alt="Precast track technology" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#8A393B]">This system has been used in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-lg">
                <li>Mumbai Metro Line 2A</li>
                <li>Bangalore Metro Reach 5</li>
                <li>Pune Metro</li>
                <li>Ahmedabad Metro</li>
              </ul>
            </div>
          </div>
          <div className="mt-24 max-w-4xl fade-in-section">
            <p className="text-2xl text-orange-400 leading-relaxed">
              Its modular nature enables speed of installation and minimal site disruption, while maintaining structural integrity and alignment across straight and curved sections.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrecastPlinthPage;