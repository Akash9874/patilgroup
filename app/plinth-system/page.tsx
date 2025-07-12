"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const PlinthSystemPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Plinth System
            </h1>
          </div>
        </div>
      </div>

      {/* Description and Executed In Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              The cast-in-situ plinth system is designed for urban rail infrastructure where precise alignment and structural consistency are critical. This system uses on-site casting to create continuous track support, reducing vibration and ensuring long-term stability on elevated structures and depots.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-[#8A393B]">
              It has been successfully executed in:
            </h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Mumbai Metro Line 1</li>
              <li className="text-lg sm:text-xl text-gray-700">Nagpur Metro</li>
              <li className="text-lg sm:text-xl text-gray-700">Hyderabad Metro Depot Zones</li>
              <li className="text-lg sm:text-xl text-gray-700">Chennai Metro Viaducts</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              With tight dimensional control and a proven track record in high-traffic zones, this system ensures smooth operations with reduced downtime and minimal wear over time.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default PlinthSystemPage; 