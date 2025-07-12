"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const UnderSleeperPadsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#212121] py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[96px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Under Sleeper Pads (USP)
            </h1>
          </div>
        </div>
      </div>

      {/* Enhanced Track Resilience Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl sm:text-5xl text-[#8A393B] leading-tight">
              Enhanced Track Resilience with <br /> Noise & Vibration Control
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700">
              Under Sleeper Pads (USP) are resilient layers attached beneath concrete sleepers. Their purpose is to absorb vibration, distribute load evenly, and extend track life — even under extreme rail traffic.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits of USP Section */}
      <div className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-4xl sm:text-5xl text-amber-500 leading-tight">
              Benefits of USP:
            </h2>
            <ul className="mt-6 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Better load distribution over the track</li>
              <li className="text-lg sm:text-xl text-gray-700">Reduced ballast wear and degradation</li>
              <li className="text-lg sm:text-xl text-gray-700">Enhanced riding comfort and lower noise</li>
              <li className="text-lg sm:text-xl text-gray-700">Minimized track stiffness variations</li>
              <li className="text-lg sm:text-xl text-gray-700">Longer lifecycle and reduced tamping cycles</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-clash text-2xl text-black text-center max-w-4xl mx-auto" style={{ lineHeight: '28px' }}>
            Manufactured using EVA-based material in collaboration with M/s Angst+Pfister, our USP technology meets the highest standards in modern railway engineering.
          </p>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default UnderSleeperPadsPage; 