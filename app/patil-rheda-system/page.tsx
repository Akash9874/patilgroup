"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const PatilRhedaSystemPage = () => {
  const sliderData = [
    { image: '/patil_rheda_image_carousel.png' },
    { image: '/26_mobile_RHEDA_plant.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/26_mobile_RHEDA_plant.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Patil RHEDA System
            </h1>
          </div>
        </div>
      </div>

      {/* Description and Implemented In Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              The Patil RHEDA System is a slab track solution optimized for use in tunnels and elevated structures. Developed with inputs from German RHEDA specifications, the system provides integrated slab, rail, and fastening control within constrained alignments.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-[#8A393B]">
              It has been implemented in:
            </h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Mumbai Metro (Tunnel Sections)</li>
              <li className="text-lg sm:text-xl text-gray-700">Chennai Metro (Viaduct Zones)</li>
              <li className="text-lg sm:text-xl text-gray-700">Katra-Banihal Section (Tunnel segments in J&K)</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider slides={sliderData} />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              This system ensures secure placement, minimal settlement, and long-term alignment even under high dynamic loading and temperature variation.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default PatilRhedaSystemPage; 