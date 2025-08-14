"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  useScrollAnimation();

  return (
    <div>
      {/* Hero Section (copied from USP style) */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Video/Image */}
        <video
          src="/sleepersherovideo.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          preload="metadata"
          poster="/10_noise_vibration_banner.jpg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row h-full z-20">
          {/* Left Panel */}
          <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mt-2">
                Noise & Vibration Solutions
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Statement Band Section (post-hero) */}
      <section className="relative bg-black text-white py-14 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
            Mass spring system designed for urban transit.
          </p>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
            Isolates vibration at the source — for quieter cities.
          </p>
        </div>
        <div className="hidden sm:block absolute top-1/2 right-6 sm:right-8 md:right-12 h-24 w-px -translate-y-1/2 bg-white/30"></div>
      </section>

      {/* Features + Statement Section (single section) */}
      <section className="bg-[#F5F4F1] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left image */}
            <div className="slide-in-left">
              <img
                src="/usp_carousel.png"
                alt="Noise & Vibration Illustration"
                className="rounded-lg w-full h-[320px] sm:h-[360px] object-cover"
              />
            </div>
            {/* Right features card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 slide-in-right">
              <h3 className="text-2xl font-extrabold text-[#8A393B] mb-4">Features</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
                <li>Reduces structure borne and airborne noise</li>
                <li>Prevents transmission to nearby buildings</li>
                <li>Used in elevated metro lines across major cities</li>
              </ul>
            </div>
          </div>

          {/* Bottom statement lines */}
          <div className="mt-12 animate-fadeInUp">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2913F]">
              Deployed in projects like Mumbai Metro
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2913F]">
              Elevated Sections.
            </p>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#8A393B]">
              Proven under real world conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoiseVibrationSolutionsPage; 