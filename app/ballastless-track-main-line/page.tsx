"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const BallastlessTrackMainLinePage = () => {
  const sliderData = [
    { image: '/24_ballastless_welding_sequence.jpg' },
    { image: '/19_ballastless_mainline_banner.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/19_ballastless_mainline_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Ballastless Track System <br /> for Main Line
            </h1>
          </div>
        </div>
      </div>

      {/* Description and In Use Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              In main line applications such as tunnels, bridges, and station zones, ballastless track offers a durable, low-maintenance alternative to conventional systems. Our design accommodates high-speed movement, continuous loading, and complex terrain.
            </p>
            <p className="mt-8 text-lg sm:text-xl text-gray-700">
              This system is currently in use in:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Jammu-Baramulla Line (Jammu & Kashmir)</li>
              <li className="text-lg sm:text-xl text-gray-700">Dedicated Freight Corridor sections</li>
              <li className="text-lg sm:text-xl text-gray-700">Northern Railways bridge zones</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider slides={sliderData} />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              Engineered for long operational life with minimal intervention, the system ensures stable geometry, reduced deflection, and consistent track performance under both freight and passenger traffic.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default BallastlessTrackMainLinePage; 