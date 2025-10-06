"use client";
import React from 'react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import ContentSlider from '@/components/ContentSlider';
import ExploreSolutions from '@/components/ExploreSolutions';

const UnderSleeperPadsPage = () => {
  const uspSlides = [
    { image: '/09_under_sleeper_pads_banner.jpg' },
    { image: '/usp_carousel.png' }
  ];

  useGSAPAnimations();

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-auto md:h-[600px]">
        {/* Background Video (same style as Sleepers hero) */}
        <video
          src="/sleepersherovideo.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          preload="metadata"
          poster="/09_under_sleeper_pads_banner.jpg"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row h-full z-20">
          {/* Left Panel */}
          <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12">
            <div className="text-left">
              <h1 className="hero-title font-bold text-white mt-2">
                Under-sleeper Pads (USP)
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Statement Band Section (post-hero) */}
      <section className="relative bg-black text-white py-14 fade-in-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
            Engineered to absorb vibration, reduce noise, and
            increase track resilience under high loads.
          </p>
        </div>
        <div className="hidden sm:block absolute top-1/2 right-6 sm:right-8 md:right-12 h-24 w-px -translate-y-1/2 bg-white/30"></div>
      </section>

      {/* Benefits + Statement Section (single section) */}
      <section className="bg-[#F5F4F1] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left image */}
            <div className="slide-in-left">
              <img
                src="/usp_carousel.png"
                alt="USP Illustration"
                className="rounded-lg w-full h-[320px] sm:h-[360px] object-cover"
              />
            </div>
            {/* Right benefits card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 slide-in-right">
              <h3 className="text-2xl font-extrabold text-[#8A393B] mb-4">Benefits:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
                <li>Better load distribution.</li>
                <li>Reduced ballast wear.</li>
                <li>Lower noise and higher ride comfort.</li>
                <li>Less variation in track stiffness.</li>
                <li>Longer life and fewer tamping cycles.</li>
              </ul>
            </div>
          </div>

          {/* Bottom statement lines */}
          <div className="mt-12 animate-fadeInUp">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2913F]">
              Manufactured using EVA-based compounds, in
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F2913F]">
              collaboration with Angst Pfister.
            </p>
            <p className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A3A3A]">
              Our USP systems meet global railway standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderSleeperPadsPage; 
