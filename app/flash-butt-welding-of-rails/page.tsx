"use client";
import React from 'react';
import Image from 'next/image';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FlashButtWeldingOfRailsPage = () => {
  useScrollAnimation();

  const sliderData = [
    { image: '/21_flash_butt_equipment.jpg' },
    { image: '/18_flash_butt_banner.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <Image src="/flashbuttslider.jpeg" alt="Flash butt welding operation" width={1920} height={1080} className="h-full w-full object-cover" loading="eager" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        {/* Centered Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Flash Butt Welding
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-sm sm:text-base mt-4 font-medium">
                High-Precision Rail Panel Fabrication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 text-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Our flash butt welding plants deliver factory-controlled, high-integrity welded rail panels. Using precision electrical resistance welding, each joint is formed without filler, reducing thermal distortion and improving fatigue resistance.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-black py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-center">
              Patil Group operates India's largest Flash Butt Welding depots, equipped to weld 20-rail panels with advanced infrastructure. With mechanised rail handling systems, these facilities ensure efficiency, safety, and world-class precision for Indian Railways.
            </p>
          </div>
        </div>
      </section>

      {/* Locations and Applications Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-24 lg:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 fade-in-section">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <Image src="/flashbutt2.webp" alt="Flash butt welding equipment" width={600} height={400} className="rounded-lg shadow-lg w-full h-auto" loading="lazy" />
            </div>
            <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-xl order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8A393B] leading-relaxed">Patil Group's welding plants are located in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-base sm:text-lg">
                <li>New Bongaigaon, Assam</li>
                <li>Rangapani, West Bengal</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-24 max-w-4xl fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 leading-relaxed">
              These facilities support large-scale panel production and direct dispatch to project sites.
              <span className="block text-orange-400 font-semibold mt-2 sm:mt-3">This system has been integral to:</span>
            </p>
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 list-disc pl-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400">
              <li>Northeast Frontier Railway projects</li>
              <li>Konkan Railway sections</li>
              <li>Bridge and tunnel approaches requiring jointless long panels</li>
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default FlashButtWeldingOfRailsPage; 