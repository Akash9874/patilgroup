"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const FlashButtWeldingOfRailsPage = () => {
  const sliderData = [
    { image: '/21_flash_butt_equipment.jpg' },
    { image: '/18_flash_butt_banner.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/18_flash_butt_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Flash Butt Welding
            </h1>
          </div>
        </div>
      </div>

      {/* Description and Locations Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              Our flash butt welding plants deliver factory-controlled, high-integrity welded rail panels. Using precision electrical resistance welding, each joint is formed without filler, reducing thermal distortion and improving fatigue resistance.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-[#8A393B]">
              Patil Group's welding plants are located in:
            </h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">New Bongaigaon, Assam</li>
              <li className="text-lg sm:text-xl text-gray-700">Rangapani, West Bengal</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider slides={sliderData} />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-700">
              These facilities support large-scale panel production and direct dispatch to project sites. This system has been integral to:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Northeast Frontier Railway projects</li>
              <li className="text-lg sm:text-xl text-gray-700">Konkan Railway sections</li>
              <li className="text-lg sm:text-xl text-gray-700">Bridge and tunnel approaches requiring jointless long panels</li>
            </ul>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default FlashButtWeldingOfRailsPage; 