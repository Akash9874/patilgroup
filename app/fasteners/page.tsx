"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import FastenerFeatures from '@/components/FastenerFeatures';
import FastenerProductList from '@/components/FastenerProductList';
import ContentSlider from '@/components/ContentSlider';
import HighSpeedTrack from '@/components/HighSpeedTrack';
import ExploreSolutions from '@/components/ExploreSolutions';

const FastenersPage = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight">
              Fasteners
            </h1>
          </div>
        </div>
      </div>

      <FastenerFeatures />
      <FastenerProductList />
      <ContentSlider />
      <HighSpeedTrack />
      <ExploreSolutions />
      
    </div>
  );
};

export default FastenersPage; 