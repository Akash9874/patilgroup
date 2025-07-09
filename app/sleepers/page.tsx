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
      <ExploreSolutions />
      
    </div>
  );
};

export default SleepersPage; 