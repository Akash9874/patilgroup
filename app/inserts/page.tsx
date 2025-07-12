"use client";

import React from 'react';
import InsertFeatures from '@/components/InsertFeatures';
import InsertDetails from '@/components/InsertDetails';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';
import { ArrowRight } from 'lucide-react';

const InsertsPage = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#212121] py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-8xl font-medium font-clash text-[#F2913F] whitespace-nowrap" style={{ lineHeight: '64px', letterSpacing: '-0.25px' }}>
            SGCI Insert And Base Plates
          </h1>
        </div>
      </div>
      <InsertFeatures />
      <InsertDetails />
      <ContentSlider />
      
      {/* Noise & Vibration Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-[68px] leading-[85px] tracking-[-0.25px] text-[#8A393B] mb-4 whitespace-nowrap">Noise & Vibration Solution for Slab Track</h2>
            <p className="text-xl text-gray-700 mb-8">Explore our engineered solutions for track noise and vibration control.</p>
            <a href="/noise-vibration-solutions" className="inline-flex items-center gap-3 bg-[#8A393B] text-white text-2xl px-6 py-4 rounded-md hover:bg-[#793032] transition-colors group">
              Read more
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-white/50">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="my-24" />
      <ExploreSolutions />
    </div>
  );
};

export default InsertsPage; 