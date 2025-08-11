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
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img src="/train 2.jpg" alt="Train at a station" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-start pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-left leading-tight animate-fadeInUp px-4">
            Patil RHEDA System
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-black py-20 text-white fade-in-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl leading-relaxed">
            The Patil RHEDA System is a slab track solution optimized for use in tunnels and elevated structures. Developed with inputs from German RHEDA specifications, the system provides integrated slab, rail, and fastening control within constrained alignments.
          </p>
        </div>
      </section>

      {/* Implemented In Section */}
      <section className="bg-black text-white py-24 sm:py-32 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 fade-in-section">
            <div className="md:w-1/2">
              <img src="/engineering-infra.jpg" alt="Abstract technology background" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-[#8A393B]">It has been implemented in:</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-lg">
                <li>Mumbai Metro (Tunnel Sections)</li>
                <li>Chennai Metro (Viaduct Zones)</li>
                <li>Katra-Banihal Section (Tunnel segments in J&K)</li>
              </ul>
            </div>
          </div>
          <div className="mt-24 max-w-4xl fade-in-section">
            <p className="text-2xl text-orange-400 leading-relaxed">
              This system ensures secure placement, minimal settlement, and long-term alignment even under high dynamic loading and temperature variation.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PatilRhedaSystemPage; 