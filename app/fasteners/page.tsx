"use client";

import React from 'react';
import FastenerFeatures from '@/components/FastenerFeatures';
import FastenerProductList from '@/components/FastenerProductList';
import ContentSlider from '@/components/ContentSlider';
import HighSpeedTrack from '@/components/HighSpeedTrack';
import ExploreSolutions from '@/components/ExploreSolutions';

const FastenersPage = () => {
  const fastenerSlides = [
    { image: '/11_fastener_types.jpg' },
    { image: '/fastener_carousel_image.png' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/fastener_hero section.jpg')" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight">
              Fasteners
            </h1>
          </div>
        </div>
      </div>

      <FastenerFeatures />
      <FastenerProductList />
      <ContentSlider slides={fastenerSlides} />
      <HighSpeedTrack />
      <ExploreSolutions />
    </div>
  );
};

export default FastenersPage; 