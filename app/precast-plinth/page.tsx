"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const PrecastPlinthPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Precast Plinth
            </h1>
          </div>
        </div>
      </div>

      {/* Description and Used In Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg sm:text-xl text-gray-700">
              The precast plinth system offers an off-site solution for rapid deployment and uniform track geometry. Pre-manufactured units are transported to site and installed with controlled tolerances, making it ideal for corridors with tight deadlines and variable curves.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-[#8A393B]">
              This system has been used in:
            </h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Mumbai Metro Line 2A</li>
              <li className="text-lg sm:text-xl text-gray-700">Bangalore Metro Reach 5</li>
              <li className="text-lg sm:text-xl text-gray-700">Pune Metro</li>
              <li className="text-lg sm:text-xl text-gray-700">Ahmedabad Metro</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider />
      <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700">
              Its modular nature enables speed of installation and minimal site disruption, while maintaining structural integrity and alignment across straight and curved sections.
            </p>
          </div>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default PrecastPlinthPage;