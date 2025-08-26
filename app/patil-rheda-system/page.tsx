"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PatilRhedaSystemPage = () => {
  useScrollAnimation();

  const sliderData = [
    { image: '/patil_rheda_image_carousel.png' },
    { image: '/26_mobile_RHEDA_plant.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <img src="/rhedahero.jpeg" alt="Patil RHEDA System" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        {/* Centered Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-6">
            <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Patil RHEDA System
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#F2913F] to-[#8A393B] mx-auto rounded-full shadow-lg"></div>
              <p className="text-gray-200 text-sm sm:text-base mt-4 font-medium">
                Advanced Slab Track Solution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-black py-12 sm:py-16 md:py-20 text-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            The Patil RHEDA System is a slab track solution optimized for use in tunnels and elevated structures. Developed with inputs from German RHEDA specifications, the system provides integrated slab, rail, and fastening control within constrained alignments.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-black py-8 sm:py-12 md:py-16 fade-in-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-center">
              At Patil Group, we offer the Patil RHEDA system, a flexible solution that adapts to the unique requirements of every project. Its core design uses modified bi-block sleepers embedded in a monolithic concrete slab, delivering strength and durability. With highly elastic rail fastenings, we ensure the vertical rail deflection needed for balanced load distribution and smooth, reliable train travel.
            </p>
          </div>
        </div>
      </section>

      {/* Implemented In Section */}
      <section className="bg-black text-white py-12 sm:py-16 md:py-24 lg:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 fade-in-section">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img src="/rheda1.jpg" alt="Patil RHEDA implementation" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 bg-white text-black p-6 sm:p-8 rounded-lg shadow-xl order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#8A393B] leading-relaxed">It has been implemented in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-base sm:text-lg">
                <li>Mumbai Metro (Tunnel Sections)</li>
                <li>Chennai Metro (Viaduct Zones)</li>
                <li>Katra-Banihal Section (Tunnel segments in J&K)</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-24 max-w-4xl fade-in-section">
            <p className="text-lg sm:text-xl md:text-2xl text-orange-400 leading-relaxed">
              This system ensures secure placement, minimal settlement, and long-term alignment even under high dynamic loading and temperature variation.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PatilRhedaSystemPage; 