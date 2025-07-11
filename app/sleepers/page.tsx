"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import SleeperFeatures from '@/components/SleeperFeatures';
import SleeperVarieties from '@/components/SleeperVarieties';
import ContentSlider from '@/components/ContentSlider';
import CompositeSleepers from '@/components/CompositeSleepers';
import ExploreSolutions from '@/components/ExploreSolutions';

const SleepersPage = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[64px] tracking-[-0.25px] text-[#F2913F]">
              Concrete Sleepers
            </h1>
          </div>
        </div>
      </div>

      <SleeperFeatures />
      <SleeperVarieties />
      <ContentSlider />
      <CompositeSleepers />

      {/* Under Sleeper Pads Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-[68px] leading-[85px] tracking-[-0.25px] text-[#8A393B] mb-4 whitespace-nowrap">Under Sleeper Pads (USP)</h2>
            <p className="text-xl text-gray-700 mb-8">Learn more about our Under Sleeper Pads for vibration and noise reduction.</p>
            <a href="/under-sleeper-pads" className="inline-flex items-center bg-[#8A393B] text-white text-sm px-5 py-3 rounded-md hover:bg-[#793032] transition-colors group">
              Read more
            </a>
          </div>
        </div>
      </section>

      <ExploreSolutions />
      
    </div>
  );
};

export default SleepersPage; 