"use client";
import React from 'react';
import MetroProjects from '@/components/MetroProjects';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const BallastlessTrackUrbanMetroPage = () => {
  const sliderData = [
    { image: '/22_ballastless_track_diagram.jpg' },
    { image: '/20_ballastless_urban_metro_banner.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/20_ballastless_urban_metro_banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Ballastless Track For <br /> Urban Metro
            </h1>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              Urban metro systems demand high precision, uninterrupted service, and long-term structural integrity. Our ballastless track system for urban metros is based on pre-cast plinths, offering a modular, high-performance solution for elevated and underground corridors.
            </p>
          </div>
        </div>
      </div>
      <MetroProjects />
      <ContentSlider slides={sliderData} />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              With reduced on-site casting, consistent alignment, and low maintenance needs, it supports fast-track construction and dependable daily operation across dense urban environments.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default BallastlessTrackUrbanMetroPage; 