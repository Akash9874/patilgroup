"use client";
import React from 'react';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const NoiseVibrationSolutionsPage = () => {
  const sliderData = [
    {
      image: "/10_noise_vibration_banner.jpg",
    },
    {
      image: "/17_noise_vibration_system.jpg",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40" style={{ backgroundImage: "url('/10_noise_vibration_banner.jpg')" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="font-clash font-medium text-[80px] leading-[84px] tracking-[-0.25px] text-[#F2913F]">
              Noise & Vibration Solution for <br /> Slab Track
            </h1>
          </div>
        </div>
      </div>

      {/* Mass-Spring System Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-[40px] leading-[37px] tracking-[-0.25px] text-[#8A393B]">
              Mass-Spring System for Urban <br /> Acoustic Isolation
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-700">
              Urban transit systems often suffer from structure-borne noise and vibration — especially in elevated or slab track scenarios. Patil Group's Mass-Spring System addresses this using a layered structure that isolates vibrations at the source.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-clash font-medium text-[96px] leading-[85px] tracking-[-0.25px] text-amber-500">
              Features
            </h2>
            <ul className="mt-6 space-y-2 list-disc pl-5">
              <li className="text-lg sm:text-xl text-gray-700">Reduces both structure-borne and secondary airborne noise</li>
              <li className="text-lg sm:text-xl text-gray-700">Prevents transmission to adjacent buildings and sensitive areas</li>
              <li className="text-lg sm:text-xl text-gray-700">Adopted in elevated metro systems for quieter city infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
      <ContentSlider slides={sliderData} />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto">
            Our system is currently deployed in projects like the Mumbai Metro Elevated Sections, delivering proven performance in real-world conditions.
          </p>
        </div>
      </div>
      <ExploreSolutions />
    </div>
  );
};

export default NoiseVibrationSolutionsPage; 