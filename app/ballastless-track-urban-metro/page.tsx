"use client";
import React from 'react';
import MetroProjects from '@/components/MetroProjects';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const BallastlessTrackUrbanMetroPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              With reduced on-site casting, consistent alignment, and low maintenance needs, it supports fast-track construction and dependable daily operation across dense urban environments.
            </p>
          </div>
        </div>
      </div>
      <ContentSlider slides={[]} />
      <ExploreSolutions />
    </div>
  );
};

export default BallastlessTrackUrbanMetroPage; 