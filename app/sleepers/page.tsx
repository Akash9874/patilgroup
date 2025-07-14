"use client";

import React from 'react';
import SleeperFeatures from '@/components/SleeperFeatures';
import SleeperVarieties from '@/components/SleeperVarieties';
import ContentSlider from '@/components/ContentSlider';
import CompositeSleepers from '@/components/CompositeSleepers';
import ExploreSolutions from '@/components/ExploreSolutions';
import { ArrowRight } from 'lucide-react';

const SleepersPage = () => {
  const sleeperSlides = [
    { image: '/12_sleeper_types.jpg' },
    { image: '/concrete_carousel_sleeper.png' }
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/05_sleepers_banner.jpg')" }}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h1 className="font-clash font-medium text-[96px] leading-[64px] tracking-[-0.25px] text-[#F2913F]">
                Concrete Sleepers
              </h1>
            </div>
          </div>
        </div>

        <SleeperFeatures />
        <SleeperVarieties />
        <ContentSlider slides={sleeperSlides} />
        <CompositeSleepers />

        {/* Under Sleeper Pads Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-clash font-medium text-[68px] leading-[85px] tracking-[-0.25px] text-[#8A393B] mb-4 whitespace-nowrap">Under Sleeper Pads (USP)</h2>
              <p className="text-xl text-gray-700 mb-8">Learn more about our Under Sleeper Pads for vibration and noise reduction.</p>
              <a href="/under-sleeper-pads" className="inline-flex items-center gap-3 bg-[#8A393B] text-white text-2xl px-6 py-4 rounded-md hover:bg-[#793032] transition-colors group">
                Read more
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-white/50">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </section>

        <ExploreSolutions />
      </main>
    </>
  );
};

export default SleepersPage; 