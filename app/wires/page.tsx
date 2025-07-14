"use client";

import React from 'react';
import WireSpecifications from '@/components/WireSpecifications';
import ContentSlider from '@/components/ContentSlider';
import WireInfo from '@/components/WireInfo';
import ExploreSolutions from '@/components/ExploreSolutions';

const WiresPage = () => {
  const wireSlides = [
    { image: '/13_wire_rolls.jpg' },
    { image: '/06_wires_banner.jpg' }
  ];

  return (
    <div className="bg-white">
      <div className="relative bg-cover bg-center py-48" style={{ backgroundImage: "url('/06_wires_banner.jpg')" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-8xl font-bold text-amber-500 font-clash">
            HTC Wire
          </h1>
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-2xl text-gray-800 mb-8">
                Patil Group proudly stands as the nation's largest manufacturer of HTS wire for the concrete sleeper industry.
              </p>
              <p className="text-2xl text-gray-800">
                As part of its backward integration strategy, the company produces 3x3 and 3x7 strand wires for track and turnout sleepers across four state-of-the-art facilities in Medchal and Bobbili (Andhra Pradesh), Ajmer (Rajasthan), and Patna (Bihar).
              </p>
            </div>
            <div>
              <img src="/13_wire_rolls.jpg" alt="Wire rolls" className="h-96 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <WireSpecifications />
      <ContentSlider slides={wireSlides} />
      <WireInfo />
      <ExploreSolutions />
    </div>
  );
};

export default WiresPage; 